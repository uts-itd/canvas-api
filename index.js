const _courses = require('./lib/courses');
const _assignments = require('./lib/assignments');
let cost = 700;
let requestCost = 15
let settings = {};
let callQueue = [];
let timeout;
let returnedCost;
let accountedRequests = 0;

settings.setCourseID = (courseID) => {
    _courseID = courseID;
}

settings.setCourseSIS = (courseSIS) => {
    _courseID = 'sis_course_id:' + courseSIS;
}

settings.setPageCount = (count) => {
    _perPage = count;
}

settings.totalCost = 0;
settings.sentRequests = 0;

function checkQueue() {
    if (callQueue.length > 0) {
        let next = callQueue.shift();
        proxy(next.target)(...next.args);
    }
}

function proxy(obj) {
    return new Proxy(obj , {
        get(target, key) {
            if (target[key] !== undefined){
                return proxy(target[key]);
            }
        },
        apply: function(target, thisArg, args) {
            if (cost < requestCost) {
                callQueue.push({ target, thisArg, args});
                console.log('Queue size: ' + callQueue.length);
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(checkQueue, 2000);
            } else {
                cost -= requestCost;
                settings.sentRequests++;
                if (cost >= requestCost && callQueue.length > 0) {
                    let next = callQueue.shift();
                    console.log('Queue size: ' + callQueue.length);
                    proxy(next.target)(...next.args);
                }
                target(settings.sentRequests, function(err, result) {
                    if (err) return args[args.length - 1](err, null);
                    returnedCost = Number(result.headers['x-rate-limit-remaining']);
                    if (this.sentRequests > accountedRequests) {
                        accountedRequests = this.sentRequests;
                        cost = returnedCost - requestCost*(settings.sentRequests - accountedRequests);
                    }
                    settings.totalCost += Number(result.headers['x-request-cost']);
                    if (callQueue.length > 0) {
                        let next = callQueue.shift();
                        console.log('Queue size: ' + callQueue.length);
                        proxy(next.target)(...next.args);
                    }
                    return args[args.length - 1](err, result);
                }.bind({ sentRequests: settings.sentRequests }));
            }
        }
    });
}

let courses = proxy(_courses);
let assignments = proxy(_assignments);

module.exports = function(domain, token) {
    _domain = domain;
    _token = token;
    _perPage = 10;
    _courseID = null;
    return {settings, courses, assignments };
}
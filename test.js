const canvas = require('./index')('uts-dev.instructure.com', '11107~1jncPdMhxkMCg0cbfRBB5bum7Au2g77A1UCr9saAr3HdviXfqyUBeQJIpk65zuCg');

canvas.course.get(57)
    .then(result => console.log(result.body))
    .catch(console.error);

const defaultSettings = require('./settings');
const helper = require('./helper');
const routes = require('./lib/routes');

exports = module.exports = createAPI;

function createAPI(domain, token) {
  const settings = defaultSettings(domain, token);

  const canvas = routes(helper(settings));

  return {
    ...canvas,
    settings,
  };
}

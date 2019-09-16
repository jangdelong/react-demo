const proxy = require('http-proxy-middleware');
const target = 'http://192.168.22.144/';

module.exports = function (app) {
  app.use(proxy('/test-api', {
    target,
    pathRewrite: {
      '^/test-api': ''
    }
  }));
};

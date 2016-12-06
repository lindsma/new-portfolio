define('new-portfolio/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'new-portfolio/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _newPortfolioConfigEnvironment) {
  var _config$APP = _newPortfolioConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
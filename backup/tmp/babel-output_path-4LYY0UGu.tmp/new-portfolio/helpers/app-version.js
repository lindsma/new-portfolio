define('new-portfolio/helpers/app-version', ['exports', 'ember', 'new-portfolio/config/environment'], function (exports, _ember, _newPortfolioConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _newPortfolioConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
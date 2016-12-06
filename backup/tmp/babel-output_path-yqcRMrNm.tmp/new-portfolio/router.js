define('new-portfolio/router', ['exports', 'ember', 'new-portfolio/config/environment'], function (exports, _ember, _newPortfolioConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _newPortfolioConfigEnvironment['default'].locationType,
    rootURL: _newPortfolioConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('work');
    this.route('contact');
    this.route('about');
  });

  exports['default'] = Router;
});
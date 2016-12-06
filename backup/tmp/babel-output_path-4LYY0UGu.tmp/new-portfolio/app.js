define('new-portfolio/app', ['exports', 'ember', 'new-portfolio/resolver', 'ember-load-initializers', 'new-portfolio/config/environment'], function (exports, _ember, _newPortfolioResolver, _emberLoadInitializers, _newPortfolioConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _newPortfolioConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _newPortfolioConfigEnvironment['default'].podModulePrefix,
    Resolver: _newPortfolioResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _newPortfolioConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
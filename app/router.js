import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('cars', {path: '/cars'}, function() {
    this.route('cars', {path: '/'}, function() {
    // this.route('index.hbs');
    this.route('car', {path: '/car/'});
    this.route('car', {path: '/car/:car_make'});
  });
});

export default Router;

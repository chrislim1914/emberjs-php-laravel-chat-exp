import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('users', function() {
    this.resource('users-index', {path: '/'});
    //this.resource('user', {path: ':user_id'});
    //this.route('new', {path: '/new'});
  });
  this.resource('events', function() {
    this.resource('events-index', {path: '/'});
    this.route('new', {path: '/new'});
  });
  this.route('login');
  this.route('register');
  this.route('profile');
});

export default Router;

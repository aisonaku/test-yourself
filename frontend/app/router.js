import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('quizzes');
  this.route('profile');
  this.route('userProfile');
  this.route('questions');
});

export default Router;

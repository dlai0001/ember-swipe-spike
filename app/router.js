import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberSwipeSpikeENV.locationType
});

Router.map(function() {
  this.route('page1');
  this.route('page2');
  this.route('page3');
  this.route('page4');
  this.route('page5');
  this.route('application');
});

export default Router;

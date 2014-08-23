import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, context) {
    controller.set('model', context);

    //setting up previous and next page on application controller for swiping.
    this.controllerFor('application').set('nextPageTarget', "page3");
    this.controllerFor('application').set('previousPageTarget', "page1");
  }
});

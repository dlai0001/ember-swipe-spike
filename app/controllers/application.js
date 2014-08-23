import Ember from 'ember';

export default Ember.Controller.extend({
  previousPageTarget:null,
  nextPageTarget: null,

  actions: {
    nextPage: function() {
      console.log("next page action", this.get('nextPageTarget'));
      if(this.get('nextPageTarget')) {
        this.transitionToRoute(this.get('nextPageTarget'));
      }

    },
    previousPage: function() {
      console.log("previous page action", this.get('previousPageTarget'));
      if(this.get('previousPageTarget')) {
        this.transitionToRoute(this.get('previousPageTarget'));
      }
    }
  }
});

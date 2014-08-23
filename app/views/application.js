import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){

    //Add swipe listeners
    var hammertime = new Hammer(this.$()[0]);
    hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammertime.on('swipe', Ember.run.bind(this, function(ev) {
      console.log(ev);

      if(ev.direction === 4) {
        this.get('controller').send('nextPage');
      }
      else {
        this.get('controller').send('previousPage');
      }
    }));
  }
});

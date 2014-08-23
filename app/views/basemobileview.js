import Ember from 'ember';

export default Ember.View.extend({
  willAnimateIn : function () {
    this.$().css("visibility", "hidden");
  },

  animateIn : function (done) {
//    this.$().animate({
//      left:"0em"
//    }, 400, done);

    var lastSwipeDir =this.get('controller').controllerFor('application').get("lastSwipeDirection");
    console.log("last swipe direction", lastSwipeDir);
    if(lastSwipeDir === "right") {
      this.$().addClass('slideRight');
    } else {
      this.$().addClass('slideLeft');
    }


    this.$().css("visiblity", "visible");
    done();
  },

  animateOut : function (done) {
//    this.$().animate({
//      left:"100%"
//    }, 400, done);
    done();
  }
});

var Megaman = function(top, left, timeBetweenSteps) {
  SpinnyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="megaman"></span>');
  this.setPosition(top, left);
};

Megaman.prototype = Object.create(Dancer.prototype);
Megaman.prototype.constructor = Megaman;

Megaman.prototype.step = function(timeBetweenSteps) {
  SpinnyDancer.prototype.step.call(this, timeBetweenSteps);
};
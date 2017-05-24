var Protoman = function(top, left, timeBetweenSteps) {
  SpinnyDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="protoman"></span>');
  this.setPosition(top, left);
};

Protoman.prototype = Object.create(Dancer.prototype);
Protoman.prototype.constructor = Protoman;

Protoman.prototype.step = function(timeBetweenSteps) {
  SpinnyDancer.prototype.step.call(this, timeBetweenSteps);  
};
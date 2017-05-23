var Megaman = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="megaman"></span>');
};

Megaman.prototype = Object.create(Dancer.prototype);
Megaman.prototype.constructor = Megaman;

Megaman.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.click(function() {
    $(this).addClass('animate');
  });
};
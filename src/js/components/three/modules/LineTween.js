const VectorTween = require('./VectorTween.js');
const Promise = require('bluebird');

class LineTween {
  constructor(shape) {

    this.input = shape;
    this.shape = [];

    this.type = "LineTween";
    this.active = false;
    this.finished = false;

    this.onUpdateCallback = () => {};

    this.tweens = [];

    this.i = 0;

    this.promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1200)
    });

    this.promises = [];

    this.input.forEach((as, i) => {

      const previousIndex = i-1 > -1 ? i-1 : 0;

      var from = this.input[previousIndex] || new THREE.Vector3(0,0,0);

      var tween = new VectorTween(from, this.input[i], 500);

      // this.shape[i] = this.input[previousIndex].clone();

      this.tweens.push(tween);

      tween.onUpdate((resu) => {

        (function(i, resu, that){ //start wrapper code
          that.shape[i] = resu;
          that.onUpdateCallback(that.shape);
        })(i, resu, this);//passing in variable to var here
      });

      this.promises.push(tween.promise);

      tween.promise.then(() => {
        const index = this.tweens.indexOf(tween);

        if (index > -1) {
          this.tweens.splice(index, 1);
        }
      });
    })

  }
  onUpdate(callback) {
    this.onUpdateCallback = callback;
  }
  start() {
    this.active = true;
    this.startTime = Date.now();
    this.tweens[0].start();
    this.tweens[1].start();
    setTimeout(function() {
      this.tweens[2].start();
    }.bind(this), 750);
  }
  update(now) {

    if (!this.active) return;

    for (var i = 0; i < this.tweens.length; i++) {
      this.tweens[i].update(now);
    }

    this.now = now;
    this.elapsed = this.now - this.startTime;
    this.percentage = this.elapsed / this.duration;
  }

}
module.exports = LineTween;

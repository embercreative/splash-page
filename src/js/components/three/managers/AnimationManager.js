const TWEEN = require('@tweenjs/tween.js');

class AnimationManager {
  constructor(props) {
    this.shouldAnimate = true;

    this.start();
  }

  start() {
    this.list = {};
  }

  add(key, obj) {
    this.list[key] = obj.animate.bind(obj);
  }

  remove(key) {
    delete this.list[key];
  }

  animate(scene, now) {

    if (!this.shouldAnimate) return;

     TWEEN.update(now);

    for (var i = 0; i < Object.keys(this.list).length; i++) {
      this.list[Object.keys(this.list)[i]] ? this.list[Object.keys(this.list)[i]](scene, now) : () => {};
    }
  }
}

module.exports = AnimationManager;

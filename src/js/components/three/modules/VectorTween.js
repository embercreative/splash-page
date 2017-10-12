class Vector3Tween {
  constructor(from, to, duration) {

    this.type = "Vector3Tween";
    this.active = false;
    this.finished = false;

    // time
    this.duration = duration; // 1000
    this.elapsed = 0; // 1000
    this.percentage = 0; // .00-1.00

    // vectors
    this.from = from; // 20 0 0
    this.current = false;
    this.to = to; // 40 0 0

    // callbacks
    this.onUpdateCallback = () => {};
    this.promise = new Promise((resolve) => { return this.resolve = resolve; })

  }
  onUpdate(callback) {
    this.onUpdateCallback = callback;
  }
  start() {
    this.active = true;
    this.startTime = Date.now();
  }
  update(now) {

    if (!this.active) return;

    this.now = now;
    this.elapsed = this.now - this.startTime;
    this.percentage = this.elapsed / this.duration > 1 ? 1 : this.elapsed / this.duration;

    var dir = this.to.clone().sub(this.from);
    var len = dir.length();
    dir = dir.normalize().multiplyScalar(len*this.percentage);

    this.current = this.from.clone().add(dir);

    this.onUpdateCallback(this.current);

    if (this.percentage >= 1) {
      this.finished = true;
      return;
    }
  }

}
module.exports = Vector3Tween;

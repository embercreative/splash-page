class CameraManager extends THREE.PerspectiveCamera {
  constructor(a,b,c,d) {
    super(a,b,c,d);
    this.position.set(85, 30, 220);
  }
}

module.exports = CameraManager;

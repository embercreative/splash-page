class ControlsManager extends THREE.OrbitControls {
  constructor(camera, dom) {
    super(camera, dom);
    this.target = new THREE.Vector3(85, 0, 85);

    this.update();
    this.enablePan = true;
    this.enableRotate = true;
    this.enableZoom = true;
  }
}

module.exports = ControlsManager;

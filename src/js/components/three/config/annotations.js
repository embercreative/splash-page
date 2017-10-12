const annotationMaterial = new THREE.LineBasicMaterial({ color: 0x777777 });
const geometry = new THREE.BufferGeometry();

module.exports = {
  type: 'Ember',
  material: annotationMaterial.clone(),
  geometry: geometry.clone(),
  shape: [
    new THREE.Vector3(0, .5, 0),
    new THREE.Vector3(.75, 10, 0),
    new THREE.Vector3(2, 10, 0)
  ],
  position: {
    y: 0,
    y: 0,
    y: 0
  }
};

module.exports = {
  type: 'Ember',
  material: new THREE.LineBasicMaterial({ color: 0x777777 }),
  geometry: new THREE.BufferGeometry(),
  shape: [
    new THREE.Vector3(0, .5, 0),
    new THREE.Vector3(.75, 10, 0),
    new THREE.Vector3(2, 10, 0)
  ],
  fontsize: 32,
  fontface: "Europa, Helvetica",
  borderColor: { r:0, g:0, b:0, a:0 },
  borderThickness: 25,
  backgroundColor: { r:0, g:0, b:0, a:.6 }
};

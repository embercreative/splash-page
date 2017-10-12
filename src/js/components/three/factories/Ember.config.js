const utils = require('../../../utils/index.js');
const settings = require('../../../settings/index.js');

var materialOpacity = 0.5;

var particleMaterial = new THREE.MeshLambertMaterial({
    color: 0xe37209,
    transparent:true,
    opacity: materialOpacity
});

var sharedGeo = new THREE.SphereGeometry( 1, 15 );

module.exports = {
  type: 'Ember',
  material: particleMaterial.clone(),
  geometry: sharedGeo.clone(),
  wrapper: true,
  scale: {
    all: function(){
      return Math.random();
    },
    scalar: function () {
      return .225 + (.075 * Math.random());
    }
  },
  position: {
    each: function(){

      var positive = Math.random() > 0.5 ? 1 : -1

      return positive * Math.random();
    },
    y: function(obj) {
      return utils.getPerlinPlacement(obj.position.x, obj.position.z, Date.now());
    },
    scalar: 300
  },
  edges: {
    enabled: false,
  }
};

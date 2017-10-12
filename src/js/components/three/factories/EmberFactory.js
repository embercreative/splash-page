const MeshFactory = require('../factories/Mesh.js');
const config = require('./Ember.config.js');

function EmberFactory(quantity) {
  var meshFactory = new MeshFactory(quantity);
  return meshFactory.create(quantity, config);
}

module.exports = EmberFactory;

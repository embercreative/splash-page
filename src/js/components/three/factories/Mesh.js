const utils = require('../utils/mesh.js');

class MeshFactory extends THREE.Group {
  constructor() {
    super();
  }

  create(quantity, options) {

    var mesh;

    for (var i = 0; i < quantity; i++) {

      mesh = new THREE.Mesh( options.geometry, options.material );

      utils.addEdges(mesh, options.edges);
      utils.adjustScale(mesh, options.scale);
      utils.adjustRotation(mesh, options.rotation);
      utils.adjustPosition(mesh, options.position);

      var passing;

      if (options.wrapper) {
        var wrapper = new THREE.Group();

        wrapper.type = options.type || '';
        wrapper.add( mesh );
        passing = wrapper;
        this.add( wrapper );
      } else {
        passing = mesh;
        this.add( mesh );
      }

    }

    if (quantity > 1) {

      return this;

    } else {

      return passing;

    }

  }

}

module.exports = MeshFactory;

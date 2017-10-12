module.exports = {
  addEdges: function(mesh, options) {
    try {
      if (options && options.enabled && options.color && mesh) {
        var egh = new THREE.EdgesHelper( mesh, options.color );
        egh.material.linewidth = options.lineWidth;
        scene.add( egh );
      }
    } catch(err) {
      console.error(err);
    }
  },

  adjustScale: function(mesh, options) {

    try {

      mesh.scalar = (typeof options.scalar === "function" ? options.scalar() : options.scalar) ;


      if (options && options.all) {

        var size = typeof options.all === "function" ? options.all() * mesh.scalar : options.all * mesh.scalar ;
        mesh.scale.set(size,size,size);

      } else if(options.x) {

        var size = options.x * mesh.scalar;
        mesh.scale.set(size,size,size);

      } else if(options.y) {

        var size = options.y * mesh.scalar;
        mesh.scale.set(size,size,size);

      } else if(options.z) {

        var size = options.z * mesh.scalar;
        mesh.scale.set(size,size,size);

      } else {
        throw "Could not adjust scale"
      }
    } catch (e) {

    }

  },

  adjustPosition: function(mesh, options) {

    try {

      options.scalar = options.scalar || 1;

      if (options && options.all) {

        var position;

        if(typeof options.all === "function"){
          position = options.all() * options.scalar
        } else {
          position = options.all * options.scalar;
        }

        mesh.position.set(position, position, position);
      } else if(options.each) {

        var position;


        if(typeof options.each === "function"){
          mesh.position.set(options.each() * options.scalar, options.each() * options.scalar, options.each() * options.scalar);
        } else {
          position = options.each * options.scalar;
          mesh.position.set(position, position, position);
        }

      }

      if(typeof options.x !== 'undefined') {

        var position = typeof options.x === 'function' ? options.x(mesh) : options.x;
        mesh.position.setX(position || 0);

      }
      if(typeof options.z !== 'undefined') {

        var position = typeof options.z === 'function' ? options.z(mesh) : options.z;
        mesh.position.setZ(position || 0);

      }
      if(typeof options.y !== 'undefined') {

        var position = typeof options.y === 'function' ? options.y(mesh) : options.y;
        mesh.position.setY(position || 0);

      }

    } catch (e) {

    }
  },

  adjustRotation: function(mesh, options) {

  try {

    options.scalar = options.scalar || 1;

    if (options && options.all) {

      var rotation = typeof options.all === "function" ? options.all() * options.scalar : options.all * options.scalar ;
      mesh.rotation.set(rotation, rotation, rotation);
    } else if(options.each) {

      var rotation;


      if(typeof options.each === "function"){
        mesh.rotation.set(options.each() * options.scalar, options.each() * options.scalar, options.each() * options.scalar);
      } else {
        rotation = options.each * options.scalar;
        mesh.rotation.set(rotation, rotation, rotation);
      }

    } else if(options.x) {

      var rotation = options.x * options.scalar;
      mesh.rotation.setX(rotation);

    } else if(options.y) {

      var rotation = options.y * options.scalar;
      mesh.rotation.setY(rotation);

    } else if(options.z) {

      var rotation = options.z * options.scalar;
      mesh.rotation.setZ(rotation);

    } else {
      throw "Could not adjust scale"
    }

    } catch (e) {

    }
  }
};

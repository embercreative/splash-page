const utils = require('../utils/mesh.js');

class EmberLine extends THREE.Line {
  constructor(geometry, material) {
    super(geometry, material);
  }
  addPoints(shape) {

    if (!shape || !shape.length) {
      return;
    }

    var positions = new Float32Array(shape.length*3);

    this.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setDrawRange(0, shape.length-1);

    var vertexPositions = this.geometry.attributes.position.array;

    var index = 0;

    var finalPosition;

    for (var iii = 0; iii < vertexPositions.length/3; iii++) {

      this.geometry.attributes.position.needsUpdate = true;

      finalPosition = new THREE.Vector3(
        this.position.x + shape[iii%shape.length].x,
        this.position.y + shape[iii%shape.length].y,
        this.position.z + shape[iii%shape.length].z
      );

      vertexPositions[index++] = finalPosition.x;
      vertexPositions[index++] = finalPosition.y;
      vertexPositions[index++] = finalPosition.z;

      this.geometry.setDrawRange(0, index);

    }

  }
}

function LineFactory() {
  return {
    new: (options) => {
      var emberLine = new EmberLine(options.geometry.clone(), options.material.clone());

      emberLine.addPoints(options.shape);

      return emberLine;
    }
  }
}

module.exports = LineFactory;

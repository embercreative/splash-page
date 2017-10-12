const utils = require('../utils/mesh.js');

function ShapeFactory() {
  return {
    new: (shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) => {

      super();

			var points = shape.createPointsGeometry();

    }
  }
}

module.exports = ShapeFactory;

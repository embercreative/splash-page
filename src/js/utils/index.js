const settings = require('../settings/index.js');

module.exports = {
  getPerlinPlacement: function(x, z, delta) {

    return noise.perlin2(((x+(delta*settings.noise.deltaScalar))+200)/(400/settings.noise.perlinStretch), ((z+(delta*settings.noise.deltaScalar))+200)/(400/settings.noise.perlinStretch)) * settings.noise.heightStretch;
  }
}
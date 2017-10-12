
const startLogoFlicker = require('./flicker.js');
const startLogoHoverListeners = require('./hover.js');

class EmberLogo {
  constructor() {
    startLogoFlicker();
    startLogoHoverListeners();
  }
}

module.exports = EmberLogo;

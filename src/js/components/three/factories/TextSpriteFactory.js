const TextSprite = require('../modules/TextSprite.js');

function TextSpriteFactory() {
  return {
    new: (parameters) => {
      return new TextSprite(parameters.text, parameters);
    }
  };
}

module.exports = TextSpriteFactory;

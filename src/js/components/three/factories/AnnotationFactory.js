const Annotation = require('../modules/Annotation.js');

function AnnotationFactory() {
  return {
    new: function (options) {
      return new Annotation(options);
    }
  }
}

module.exports = AnnotationFactory;

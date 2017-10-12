const _ = require('lodash');

const settings = require('../../../settings/index.js');
const utils = require('../../../utils/index.js');

const AnnotationFactory = require('../factories/AnnotationFactory.js');

class AnnotationManager {
  constructor(embers, animationManager, scene) {

    this.animationManager = animationManager;
    this.scene = scene;

    this.embers = embers;

    this.annotations = [];

    this.labels = settings.annotations.labels;
    this.currentLabel = 0;

    this.annotated = [];
    this.annotationSequenceActive = true;

    this.speed = 9000;

    this.annotationFactory = new AnnotationFactory();

    // this.createAnnotations();

    this.initAnnotationSequence();
  }

  pauseAnnotationSequence() {
    this.annotationSequenceActive = false;
  }

  resumeAnnotationSequence() {
    this.annotationSequenceActive = true;
  }

  initAnnotationSequence() {

    var randomEmber;

    this.annotationSequence = setInterval(() => {

      if (!this.annotationSequenceActive) {
        return;
      }

      randomEmber = this.embers[Math.floor(Math.random() * this.embers.length)];

      const newAnnotation = this.annotationFactory.new({
        text: this.labels[this.currentLabel],
        position: randomEmber.children[0].position
      });

      this.animationManager.add('annotationAnimation' + newAnnotation.uuid, newAnnotation);
      
      randomEmber.add(newAnnotation);
      this.annotations.push(newAnnotation);

      setTimeout(() => {

        newAnnotation.parent.remove(newAnnotation);

        this.animationManager.remove('annotationAnimation' + newAnnotation.uuid);

        newAnnotation.remove();

        this.scene.remove( newAnnotation );

      }, this.speed);

      if (this.currentLabel != this.labels.length-1) {
        this.currentLabel++;
      } else {
        this.currentLabel = 0;
      }

    },this.speed/this.labels.length);

  }

  createAnnotations() {

    var ember, emberMesh, emberWrapper, annotationsRendered = 0;

    for (var i = 0; i < this.embers.length; i++) {

      emberWrapper = this.embers[i];
      emberMesh = emberWrapper.children[0];

      var shouldDraw = annotationsRendered < this.labels.length;

      if (shouldDraw) {

        var annotation = this.annotationFactory.new({
          material: material.clone(),
          position: emberMesh.position,
          label: this.labels[annotationsRendered]
        });

        annotationsRendered++;

        emberWrapper.add(annotation);
        this.annotated.push(emberWrapper);

      }

    }

  }

  filter(funct) {
    return _.filter(this.children, funct);
  }

}

module.exports = AnnotationManager;

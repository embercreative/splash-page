const _ = require('lodash');

const settings = require('../../../settings/index.js');
const utils = require('../../../utils/index.js');

const AnnotationManager = require('./AnnotationManager.js');

const EmberFactory = require('../factories/EmberFactory.js');

class EmberManager extends THREE.Group {
  constructor(quantity, animationManager, scene) {
    super();

    this.animationManager = animationManager;
    this.scene = scene;

    this.children = new EmberFactory(quantity).children;
    this.embers = Array.from(this.children);
    this.annotated = [];
    this.annotationSequenceActive = true;

    this.bounds = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(170, 170)
    ]

    this.focused = this.filter((ember, i) => {

      let testX = true, testY = true, testZ = true;
      let emberMesh = ember.children[0];

      if (emberMesh.position.x > this.bounds[1].x || emberMesh.position.x < this.bounds[0].y || emberMesh.position.z > this.bounds[1].y || emberMesh.position.z < this.bounds[0].x) {
        testX = false; testY = false; testZ = false;
      }

      return testX && testY && testZ;

    });

    this.annotationManager = new AnnotationManager(this.focused, this.animationManager, this.scene);

    if (global.debug) this.debug();
  }

  animate (scene, now) {
    for (var i = 0; i < this.embers.length; i++) {
      waveObjects(this.embers[i], scene, now);
    }
  }

  filter(funct) {
    return _.filter(this.embers, funct);
  }

  debug() {

    var shape = new THREE.Shape();

		shape.moveTo( this.bounds[0].x, this.bounds[0].y );
		shape.lineTo( this.bounds[0].x, this.bounds[1].y );
		shape.lineTo( this.bounds[1].x, this.bounds[1].y );
		shape.lineTo( this.bounds[1].x, this.bounds[0].y );
		shape.lineTo( this.bounds[0].x, this.bounds[0].y );

		var points = shape.createPointsGeometry();

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 0, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 2, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 4, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 6, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 8, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, 10, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, -2, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, -4, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, -6, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, -8, 0 );

		this.add( line );

    var line = new THREE.Line( points, new THREE.LineBasicMaterial( { color: 0xFF0000, linewidth: 3 } ) );
    line.rotation.set( Math.PI/2, 0, 0 );
		line.position.set( 0, -10, 0 );

		this.add( line );
  }
}

function waveObjects(object3d, scene, now) {

  var waveY = utils.getPerlinPlacement(object3d.children[0].position.x, object3d.children[0].position.z, now);
  object3d.position.setY(waveY);

}

module.exports = EmberManager;

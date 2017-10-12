const LineFactory = require('../factories/LineFactory.js');
const TextSpriteFactory = require('../factories/TextSpriteFactory.js');

const settings = require('../../../settings/index.js');
const config = require('./Annotation.config.js')

const lineFactory = new LineFactory();
const textSpriteFactory = new TextSpriteFactory();

const LineTween = require('./LineTween.js');
const VectorTween = require('./VectorTween.js');

class Annotation extends THREE.Group {
  constructor(options) {
    super();

    this.type = "Annotation";

    // this.shape = [
    //   new THREE.Vector3(0, .5, 0),
    //   new THREE.Vector3(.75, 10, 0),
    //   new THREE.Vector3(.75, 10, 0)
    // ];

    this.shape = [];

    this.line = lineFactory.new( {
      geometry: options.geometry || config.geometry,
      material: options.material || config.material
    } );
    this.label = textSpriteFactory.new({
      text: options.text,
      fontsize: options.fontsize || config.fontsize,
      fontface: options.fontface || config.fontface,
      borderColor: options.borderColor || config.borderColor,
      borderThickness: options.borderThickness || config.borderThickness,
      backgroundColor: options.backgroundColor || config.backgroundColor
    });

    this.line.position.set(options.position.x, options.position.y, options.position.z);
    this.label.position.set(options.position.x+10, options.position.y+9.5, options.position.z);

    this.add(this.line);

    this.tween = new LineTween([
      new THREE.Vector3(0, .5, 0),
      new THREE.Vector3(.75, 10, 0),
      new THREE.Vector3(2, 10, 0)
    ]);

    // this.tween = new VectorTween(this.shape[2], new THREE.Vector3(2, 10, 0), 1000);

    this.tween.onUpdate((result) => {
      this.shape = result;
    });

    this.tween.promise.then(() => {
      this.add(this.label);
    });

    this.tween.start();

  }
  animate (scene, now) {

    if (!this.shape && !this.shape.length) return;

    this.tween.update(now);

    var positions = new Float32Array(this.shape.length*3);

    this.line.geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.line.geometry.setDrawRange(0, this.shape.length-1);

	  var vertexPositions = this.line.geometry.attributes.position.array;

    var index = 0;

    var finalPosition;

    for (var iii = 0; iii < vertexPositions.length/3; iii++) {

      finalPosition = new THREE.Vector3(
        this.position.x + this.shape[iii%this.shape.length].x,
        this.position.y + this.shape[iii%this.shape.length].y,
        this.position.z + this.shape[iii%this.shape.length].z
      );

      vertexPositions[index++] = finalPosition.x;
      vertexPositions[index++] = finalPosition.y;
      vertexPositions[index++] = finalPosition.z;

      this.line.geometry.setDrawRange(0, index);

      this.line.geometry.attributes.position.needsUpdate = true;

    }


  }

}

module.exports = Annotation;

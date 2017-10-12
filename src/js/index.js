
const SceneManager = require('./components/three/managers/scene');
const MouseManager = require('./components/three/managers/MouseManager');
const EmberManager = require('./components/three/managers/EmberManager');
const AnimationManager = require('./components/three/managers/AnimationManager');

const EmberLogo = require('./components/logo/logo.js');

const utils = require('./utils/index.js');

const settings = require('./settings/index.js');
const config = require('./components/three/config/index.js');

var mouse;

var stats;

var scene;
var delta, now;

var animationManager;

if( !init() )	animate();

// init the scene
function init(){

  // global.debug = true;

  animationManager = new AnimationManager();

  scene = new SceneManager({}, animationManager);

  mouse = new MouseManager();

  buildScene();

}

function buildScene(){

  this.embers = new EmberManager(5000, animationManager, scene);

  scene.add(this.embers);
  animationManager.add('emberAnimation', this.embers);

  this.logo = new EmberLogo();

}

// animation loop
function animate() {

  // loop on request animation loop
  // - it has to be at the begining of the function
  // - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
  requestAnimationFrame( animate );

  // do the render
  render();

  // update stats
  // stats.update();
}

// render the scene

function render() {

  delta	= Date.now() - now;
  now	= Date.now();

  scene.cameraControls.update();

  animationManager.animate(scene, now);

  scene.renderer.render( scene, scene.camera );
}

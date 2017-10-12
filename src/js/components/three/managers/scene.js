
const CameraManager = require('./CameraManager.js');
const ControlsManager = require('./ControlsManager.js');
const LightsManager = require('./LightsManager.js');

class EmberScene extends THREE.Scene {
  constructor(props, animationManager) {
    super(props)

    this.renderer;

    this.color = 0xFF0000;

    if( Detector.webgl ){
      this.renderer = new THREE.WebGLRenderer({
        antialias		: true,	// to get smoother output
        preserveDrawingBuffer	: true	// to allow screenshot
      });
      this.renderer.setClearColor( 0x161616 );
    }else{
      Detector.addGetWebGLMessage();
      return true;
    }
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('container').appendChild(this.renderer.domElement);

    this.camera	= new CameraManager(35, window.innerWidth / window.innerHeight, 1, 10000 );
    this.cameraControls = new ControlsManager( this.camera, this.renderer.domElement );

    this.lights = new LightsManager({}, this);
    this.add(this.lights);
    animationManager.add('lightsAnimation', this.lights);
  }
  init() {

    // put a camera in the scene
    scene.add(this.camera);

    // transparently support window resize
    THREEx.WindowResize.bind(renderer, this.camera);

    // allow 'p' to make screenshot
    THREEx.Screenshot.bindKey(renderer);

    // allow 'f' to go fullscreen where this feature is supported
    if( THREEx.FullScreen.available() ){
      THREEx.FullScreen.bindKey();
    }

    noise.seed(settings.noise.seed);

    var position = this.camera.position;
    var target = new THREE.Vector3(
      this.camera.position.x,
      this.camera.position.y - 100,
      this.camera.position.z
    );

    console.log(TWEEN);

    new TWEEN.Tween( this.camera ).to( { position: target }, 600 ).start();
  }
}

module.exports = EmberScene;

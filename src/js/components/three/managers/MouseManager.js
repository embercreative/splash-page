class MouseManager extends THREE.Vector2 {
  constructor(props) {
    super(props)
    this.startMouseTracking();
  }

  startMouseTracking(){

    window.addEventListener('mousemove', this.onMouseMove);

  }

  endMouseTracking(){

    window.removeEventListener('mousemove');

  }
}

function onMouseMove(evt) {

  this.x = ( evt.clientX / window.innerWidth ) * 2 - 1;
  this.y = ( evt.clientY / window.innerHeight ) * 2 - 1;

}

module.exports = MouseManager;

class LightsManager extends THREE.Group {
  constructor(props) {
    super(props)
    this.ambient = new THREE.Group();
    this.directional = new THREE.Group();
    this.point = new THREE.Group();

    this.add(this.ambient);
    this.add(this.directional);
    this.add(this.point);

    this.addLights();
  }
  animate(scene, now) {
    // animate DirectionalLight
    _.each(this.directional.children, (object3d, idx) => {
      if( object3d instanceof THREE.DirectionalLight === false )	return
      var ang	= 0.0005 * now * (idx % 2 ? 1 : -1);
      object3d.position.set(Math.cos(ang), Math.sin(ang), Math.cos(ang*2)).normalize();
    })
    // animate PointLights
    _.each(this.point.children, (object3d, idx) => {
      if( object3d instanceof THREE.PointLight === false )	return
      var angle	= 0.0005 * now * (idx % 2 ? 1 : -1) + idx * Math.PI/3;
      object3d.position.set(Math.cos(angle)*3, Math.sin(angle*3)*2, Math.cos(angle*2)).normalize().multiplyScalar(2);
    })
  }
  addLight(type, color) {
    var newLight;

    if (type === "ambient") {
      newLight = new THREE.AmbientLight(color);
      this.ambient.add(newLight);
    } else if (type === "directional") {
      newLight = new THREE.DirectionalLight(color);
      this.directional.add(newLight);
    } else if (type === "point") {
      newLight = new THREE.PointLight(color);
      this.point.add(newLight);
    }

    return newLight;
  }
  addLights() {

    var ambient	= this.addLight("ambient", 0xe35200 );

    var directional	= this.addLight("directional", 0xFF8800 );
    directional.position.set( Math.random(), Math.random(), Math.random() ).normalize();

    var directional2	= this.addLight("directional", 0xFF8800 );
    directional2.position.set( Math.random(), Math.random(), Math.random() ).normalize();

    var directional2	= this.addLight("directional", 0xFF8800 );
    directional2.position.set( Math.random(), Math.random(), Math.random() ).normalize();

    var pointLight	= this.addLight("point", 0xFF8800 );
    pointLight.position.set( Math.random()-0.5, Math.random()-0.5, Math.random()-0.5 ).normalize().multiplyScalar(200.2);

    var pointLight2	= this.addLight("point", 0xFF8800 * 0.6 );
    pointLight2.position.set( Math.random()-0.5, Math.random()-0.5, Math.random()-0.5 ).normalize().multiplyScalar(200.2);
  }
}

module.exports = LightsManager;

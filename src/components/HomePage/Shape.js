class Shape {
  constructor(id) {
    this.id = id;
    this.start = Date.now();
    this.container;
    this.camera;
    this.controls;
    this.scene;
    this.renderer;
    this.mesh;
    this.effect;
    this.sphere;
    this.place;
  }

  init() {
    this.container = document.getElementById(this.id);
    const width = this.container.offsetWidth || 2;
    const height = this.container.offsetHeight || 2;
    console.log(width);
    console.log(height);

    this.camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    this.camera.position.y = 150;
    this.camera.position.z = 500;

    this.controls = new THREE.TrackballControls(this.camera);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    var light = new THREE.PointLight(0xffffff);
    light.position.set(500, 500, 500);
    this.scene.add(light);

    var light = new THREE.PointLight(0xffffff, 0.25);
    light.position.set(-500, -500, -500);
    this.scene.add(light);

    this.sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshLambertMaterial());
    this.scene.add(this.sphere);


    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0xf0f0f0);
  	this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    this.effect = new THREE.AsciiEffect(this.renderer);
    this.effect.setSize(width, height);
    this.container.appendChild(this.effect.domElement);

    window.addEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize() {
    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.effect.setSize(this.container.offsetWidth, this.container.offsetHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    const timer = Date.now() - this.start;

    this.sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
    this.sphere.rotation.x = timer * 0.0003;
    this.sphere.rotation.z = timer * 0.0002;

    this.effect.render(this.scene, this.camera);
  }
}

export default Shape;

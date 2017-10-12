if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

THREE.Cache.enabled = true;

class AsciiName {
  constructor(id) {
    this.id = id;

    this.container;
    this.controls;
    this.permalink;
    this.hex;
    this.color;

    this.camera;
    this.cameraTarget;
    this.scene;
    this.renderer;

    this.group;
    this.textMesh1;
    this.textMesh2;
    this.textGeo;
    this.materials;

    this.firstLetter = true;

    this.text = "BOMANI";
    this.font = "Aktiv_Grotesk_Regular";
    this.height = 20;
    this.size = 70;
    this.hover = 30;
    this.curveSegments = 4;
    this.bevelThickness = 2;
    this.bevelSize = 1.5;
    this.bevelSegments = 3;
    this.bevelEnabled = true;

    this.targetRotation = 0;
    this.targetRotationOnMouseDown = 0;

    this.mouseX = 0;
    this.mouseXOnMouseDown = 0;

    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
  }

  init() {
    console.log("INIT");
  	this.container = document.getElementById(this.id);
    console.log(this.container)
    var windowHalfX = this.container.offsetWidth / 2;
    var windowHalfY = this.container.offsetHeight / 2;

  	// CAMERA

  	// camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
  	this.camera = new THREE.PerspectiveCamera( 30, this.container.offsetWidth / this.container.offsetHeight, 1, 1500 );
  	this.camera.position.set( 0, 400, 700 );

  	this.cameraTarget = new THREE.Vector3( 0, 150, 0 );

    // TRACKBALL CONTROLS
    // controls = new THREE.TrackballControls(camera);

  	// SCENE

  	this.scene = new THREE.Scene();

  	// LIGHTS

  	var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
  	dirLight.position.set( 0.2, 1, 0 );
  	this.scene.add( dirLight );

  	this.materials = [
  		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
  		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
  	];

  	this.group = new THREE.Group();
  	this.group.position.y = 100;

  	this.scene.add( this.group );
    console.log(this.scene)

  	this.loadFont();

  	// RENDERER

  	this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setClearColor( 0xf0f0f0 );
  	this.renderer.setPixelRatio( window.devicePixelRatio );
  	// renderer.setSize( window.innerWidth, window.innerHeight );
  	this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );

    this.effect = new THREE.AsciiEffect( this.renderer );
    console.log(this.effect)
  	this.effect.setSize( this.container.offsetWidth, this.container.offsetHeight );
  	this.container.appendChild( this.effect.domElement );

    console.log(this.container.offsetWidth)
    console.log(this.container.offsetHeight)

  	// EVENTS

  	document.addEventListener( 'mousedown', this.onDocumentMouseDown.bind(this), false );
  	document.addEventListener( 'touchstart', this.onDocumentTouchStart.bind(this), false );
  	document.addEventListener( 'touchmove', this.onDocumentTouchMove.bind(this), false );
  	document.addEventListener( 'keypress', this.onDocumentKeyPress.bind(this), false );
  	document.addEventListener( 'keydown', this.onDocumentKeyDown.bind(this), false );

  	//

  	window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

  }

  onWindowResize() {
    //  console.log(this.container);

  	// windowHalfX = window.innerWidth / 2;
  	// windowHalfY = window.innerHeight / 2;
    this.windowHalfX = this.container.offsetWidth / 2;
    this.windowHalfY = this.container.offsetHeight / 2;

  	this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
  	this.camera.updateProjectionMatrix();

  	this.renderer.setSize( this.container.offsetWidth, this.container.offsetHeight );
    this.effect.setSize( this.container.offsetWidth, this.container.offsetHeight);

  }

  onDocumentKeyDown( event ) {

  	if ( this.firstLetter ) {

  		this.firstLetter = false;
  		this.text = "";

  	}

  	var keyCode = event.keyCode;

  	// backspace

  	if ( keyCode == 8 ) {

  		event.preventDefault();

  		this.text = this.text.substring( 0, this.text.length - 1 );
  		this.refreshText();

  		return false;

  	}

  }

  onDocumentKeyPress( event ) {

  	var keyCode = event.which;

  	// backspace

  	if ( keyCode == 8 ) {

  		event.preventDefault();

  	} else {

  		var ch = String.fromCharCode( keyCode );
  		this.text += ch;

  		this.refreshText();

  	}

  }

  loadFont() {
  	var loader = new THREE.FontLoader();
  	loader.load( 'fonts/Aktiv_Grotesk_Regular.json', function ( response ) {

  		this.font = response;

  		this.refreshText();

  	}.bind(this) );

  }

  createText() {

  	this.textGeo = new THREE.TextBufferGeometry( this.text, {

  		font: this.font,

  		size: this.size,
  		height: this.height,
  		curveSegments: this.curveSegments,

  		bevelThickness: this.bevelThickness,
  		bevelSize: this.bevelSize,
  		bevelEnabled: this.bevelEnabled,

  		material: 0,
  		extrudeMaterial: 1

  	});
    console.log(this.textGeo);

  	this.textGeo.computeBoundingBox();
  	this.textGeo.computeVertexNormals();

  	// "fix" side normals by removing z-component of normals for side faces
  	// (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

  	if ( ! this.bevelEnabled ) {

  		var triangleAreaHeuristics = 0.1 * ( this.height * this.size );

  		for ( var i = 0; i < this.textGeo.faces.length; i ++ ) {

  			var face = this.textGeo.faces[ i ];

  			if ( face.materialIndex == 1 ) {

  				for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

  					face.vertexNormals[ j ].z = 0;
  					face.vertexNormals[ j ].normalize();

  				}

  				var va = this.textGeo.vertices[ face.a ];
  				var vb = this.textGeo.vertices[ face.b ];
  				var vc = this.textGeo.vertices[ face.c ];

  				var s = THREE.GeometryUtils.triangleArea( va, vb, vc );

  				if ( s > triangleAreaHeuristics ) {

  					for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

  						face.vertexNormals[ j ].copy( face.normal );

  					}

  				}

  			}

  		}

  	}

  	var centerOffset = -0.5 * ( this.textGeo.boundingBox.max.x - this.textGeo.boundingBox.min.x );

  	this.textMesh1 = new THREE.Mesh( this.textGeo, this.materials );

  	this.textMesh1.position.x = this.centerOffset;
  	this.textMesh1.position.y = this.hover;
  	this.textMesh1.position.z = 0;

  	this.textMesh1.rotation.x = 0;
  	this.textMesh1.rotation.y = Math.PI * 2;

  	this.group.add( this.textMesh1 );

  }

  refreshText() {

  	this.group.remove( this.textMesh1 );

  	if ( !this.text ) return;

  	this.createText();

  }

  onDocumentMouseDown( event ) {

  	event.preventDefault();

  	document.addEventListener( 'mousemove', this.onDocumentMouseMove.bind(this), false );
  	document.addEventListener( 'mouseup', this.onDocumentMouseUp.bind(this), false );
  	document.addEventListener( 'mouseout', this.onDocumentMouseOut.bind(this), false );

  	this.mouseXOnMouseDown = event.clientX - this.windowHalfX;
  	this.targetRotationOnMouseDown = this.targetRotation;

  }

  onDocumentMouseMove( event ) {

  	this.mouseX = event.clientX - this.windowHalfX;

  	this.targetRotation = this.targetRotationOnMouseDown + ( this.mouseX - this.mouseXOnMouseDown ) * 0.02;

  }

  onDocumentMouseUp( event ) {

  	document.removeEventListener( 'mousemove', this.onDocumentMouseMove, false );
  	document.removeEventListener( 'mouseup', this.onDocumentMouseUp, false );
  	document.removeEventListener( 'mouseout', this.onDocumentMouseOut, false );

  }

  onDocumentMouseOut( event ) {

  	document.removeEventListener( 'mousemove', this.onDocumentMouseMove, false );
  	document.removeEventListener( 'mouseup', this.onDocumentMouseUp, false );
  	document.removeEventListener( 'mouseout', this.onDocumentMouseOut, false );

  }

  onDocumentTouchStart( event ) {

  	if ( event.touches.length == 1 ) {

  		event.preventDefault();

  		this.mouseXOnMouseDown = event.touches[ 0 ].pageX - this.windowHalfX;
  		this.targetRotationOnMouseDown = this.targetRotation;

  	}

  }

  onDocumentTouchMove( event ) {

  	if ( event.touches.length == 1 ) {

  		event.preventDefault();

  		this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
  		this.targetRotation = this.targetRotationOnMouseDown + ( this.mouseX - this.mouseXOnMouseDown ) * 0.05;

  	}

  }

  //

  animate() {
  	requestAnimationFrame( this.animate.bind(this) );

  	this.render();

  }

  render() {

  	this.group.rotation.y += ( this.targetRotation - this.group.rotation.y ) * 0.05;

  	this.camera.lookAt( this.cameraTarget );
    // controls.update();

  	this.renderer.clear();
  	this.effect.render( this.scene, this.camera );

  }
}

// function init(id) {
//
// 	container = document.getElementById(id);
//
//   var windowHalfX = container.offsetWidth / 2;
//   var windowHalfY = container.offsetHeight / 2;
//
// 	// CAMERA
//
// 	// camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
// 	camera = new THREE.PerspectiveCamera( 30, container.offsetWidth / container.offsetHeight, 1, 1500 );
// 	camera.position.set( 0, 400, 700 );
//
// 	cameraTarget = new THREE.Vector3( 0, 150, 0 );
//
//   // TRACKBALL CONTROLS
//   // controls = new THREE.TrackballControls(camera);
//
// 	// SCENE
//
// 	scene = new THREE.Scene();
//
// 	// LIGHTS
//
// 	var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
// 	dirLight.position.set( 0.2, 1, 0 );
// 	scene.add( dirLight );
//
// 	materials = [
// 		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
// 		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
// 	];
//
// 	group = new THREE.Group();
// 	group.position.y = 100;
//
// 	scene.add( group );
//
// 	loadFont();
//
// 	// RENDERER
//
// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
//   renderer.setClearColor( 0xf0f0f0 );
// 	renderer.setPixelRatio( window.devicePixelRatio );
// 	// renderer.setSize( window.innerWidth, window.innerHeight );
// 	renderer.setSize( container.offsetWidth, container.offsetHeight );
//
//   effect = new THREE.AsciiEffect( renderer );
// 	effect.setSize( container.offsetWidth, container.offsetHeight );
// 	container.appendChild( effect.domElement );
//
// 	// EVENTS
//
// 	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
// 	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
// 	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
// 	document.addEventListener( 'keypress', onDocumentKeyPress, false );
// 	document.addEventListener( 'keydown', onDocumentKeyDown, false );
//
// 	//
//
// 	window.addEventListener( 'resize', onWindowResize, false );
//
// }

// function onWindowResize() {
//
// 	// windowHalfX = window.innerWidth / 2;
// 	// windowHalfY = window.innerHeight / 2;
//   windowHalfX = container.offsetWidth / 2;
//   windowHalfY = container.offsetHeight / 2;
//
// 	camera.aspect = container.offsetWidth / container.offsetHeight;
// 	camera.updateProjectionMatrix();
//
// 	renderer.setSize( container.offsetWidth, container.offsetHeight );
//   effect.setSize( container.offsetWidth, container.offsetHeight);
//
// }

//

function boolToNum( b ) {

	return b ? 1 : 0;

}

// function onDocumentKeyDown( event ) {
//
// 	if ( firstLetter ) {
//
// 		firstLetter = false;
// 		text = "";
//
// 	}
//
// 	var keyCode = event.keyCode;
//
// 	// backspace
//
// 	if ( keyCode == 8 ) {
//
// 		event.preventDefault();
//
// 		text = text.substring( 0, text.length - 1 );
// 		refreshText();
//
// 		return false;
//
// 	}
//
// }

// function onDocumentKeyPress( event ) {
//
// 	var keyCode = event.which;
//
// 	// backspace
//
// 	if ( keyCode == 8 ) {
//
// 		event.preventDefault();
//
// 	} else {
//
// 		var ch = String.fromCharCode( keyCode );
// 		text += ch;
//
// 		refreshText();
//
// 	}
//
// }

// function loadFont() {
//
// 	var loader = new THREE.FontLoader();
// 	loader.load( 'fonts/Aktiv_Grotesk_Regular.json', function ( response ) {
//
// 		font = response;
//
// 		refreshText();
//
// 	} );
//
// }
//
// function createText() {
//
// 	textGeo = new THREE.TextBufferGeometry( text, {
//
// 		font: font,
//
// 		size: size,
// 		height: height,
// 		curveSegments: curveSegments,
//
// 		bevelThickness: bevelThickness,
// 		bevelSize: bevelSize,
// 		bevelEnabled: bevelEnabled,
//
// 		material: 0,
// 		extrudeMaterial: 1
//
// 	});
//
// 	textGeo.computeBoundingBox();
// 	textGeo.computeVertexNormals();
//
// 	// "fix" side normals by removing z-component of normals for side faces
// 	// (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)
//
// 	if ( ! bevelEnabled ) {
//
// 		var triangleAreaHeuristics = 0.1 * ( height * size );
//
// 		for ( var i = 0; i < textGeo.faces.length; i ++ ) {
//
// 			var face = textGeo.faces[ i ];
//
// 			if ( face.materialIndex == 1 ) {
//
// 				for ( var j = 0; j < face.vertexNormals.length; j ++ ) {
//
// 					face.vertexNormals[ j ].z = 0;
// 					face.vertexNormals[ j ].normalize();
//
// 				}
//
// 				var va = textGeo.vertices[ face.a ];
// 				var vb = textGeo.vertices[ face.b ];
// 				var vc = textGeo.vertices[ face.c ];
//
// 				var s = THREE.GeometryUtils.triangleArea( va, vb, vc );
//
// 				if ( s > triangleAreaHeuristics ) {
//
// 					for ( var j = 0; j < face.vertexNormals.length; j ++ ) {
//
// 						face.vertexNormals[ j ].copy( face.normal );
//
// 					}
//
// 				}
//
// 			}
//
// 		}
//
// 	}
//
// 	var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
//
// 	textMesh1 = new THREE.Mesh( textGeo, materials );
//
// 	textMesh1.position.x = centerOffset;
// 	textMesh1.position.y = hover;
// 	textMesh1.position.z = 0;
//
// 	textMesh1.rotation.x = 0;
// 	textMesh1.rotation.y = Math.PI * 2;
//
// 	group.add( textMesh1 );
//
// }
//
// function refreshText() {
//
// 	group.remove( textMesh1 );
//
// 	if ( !text ) return;
//
// 	createText();
//
// }
//
// function onDocumentMouseDown( event ) {
//
// 	event.preventDefault();
//
// 	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
// 	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
// 	document.addEventListener( 'mouseout', onDocumentMouseOut, false );
//
// 	mouseXOnMouseDown = event.clientX - windowHalfX;
// 	targetRotationOnMouseDown = targetRotation;
//
// }
//
// function onDocumentMouseMove( event ) {
//
// 	mouseX = event.clientX - windowHalfX;
//
// 	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
//
// }
//
// function onDocumentMouseUp( event ) {
//
// 	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
// 	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
// 	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
//
// }
//
// function onDocumentMouseOut( event ) {
//
// 	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
// 	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
// 	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
//
// }
//
// function onDocumentTouchStart( event ) {
//
// 	if ( event.touches.length == 1 ) {
//
// 		event.preventDefault();
//
// 		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
// 		targetRotationOnMouseDown = targetRotation;
//
// 	}
//
// }
//
// function onDocumentTouchMove( event ) {
//
// 	if ( event.touches.length == 1 ) {
//
// 		event.preventDefault();
//
// 		mouseX = event.touches[ 0 ].pageX - windowHalfX;
// 		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
//
// 	}
//
// }
//
// //
//
// function animate() {
//
// 	requestAnimationFrame( animate );
//
// 	render();
//
// }
//
// function render() {
//
// 	group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
//
// 	camera.lookAt( cameraTarget );
//   // controls.update();
//
// 	renderer.clear();
// 	effect.render( scene, camera );
//
// }

// var leftAscii = new AsciiName("test");
// leftAscii.init();
// leftAscii.animate();


export default AsciiName;

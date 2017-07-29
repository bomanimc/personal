

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

THREE.Cache.enabled = true;

var container, controls, permalink, hex, color;

var camera, cameraTarget, scene, renderer;

var group, textMesh1, textMesh2, textGeo, materials;

var firstLetter = true;

var text = "BOMANI",
  font = "Aktiv_Grotesk_Regular",
	height = 20,
	size = 70,
	hover = 30,

	curveSegments = 4,

	bevelThickness = 2,
	bevelSize = 1.5,
	bevelSegments = 3,
	bevelEnabled = true;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// CAMERA

	camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1500 );
	camera.position.set( 0, 400, 700 );

	cameraTarget = new THREE.Vector3( 0, 150, 0 );

  // TRACKBALL CONTROLS
  // controls = new THREE.TrackballControls(camera);

	// SCENE

	scene = new THREE.Scene();

	// LIGHTS

	var dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
	dirLight.position.set( 0.2, 1, 0 );
	scene.add( dirLight );

	materials = [
		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.FlatShading } ), // front
		new THREE.MeshPhongMaterial( { color: 0xffffff, shading: THREE.SmoothShading } ) // side
	];

	group = new THREE.Group();
	group.position.y = 100;

	scene.add( group );

	loadFont();

	// RENDERER

	renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

  effect = new THREE.AsciiEffect( renderer );
	effect.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( effect.domElement );

	// EVENTS

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	document.addEventListener( 'keypress', onDocumentKeyPress, false );
	document.addEventListener( 'keydown', onDocumentKeyDown, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
  effect.setSize( window.innerWidth, window.innerHeight );

}

//

function boolToNum( b ) {

	return b ? 1 : 0;

}

function onDocumentKeyDown( event ) {

	if ( firstLetter ) {

		firstLetter = false;
		text = "";

	}

	var keyCode = event.keyCode;

	// backspace

	if ( keyCode == 8 ) {

		event.preventDefault();

		text = text.substring( 0, text.length - 1 );
		refreshText();

		return false;

	}

}

function onDocumentKeyPress( event ) {

	var keyCode = event.which;

	// backspace

	if ( keyCode == 8 ) {

		event.preventDefault();

	} else {

		var ch = String.fromCharCode( keyCode );
		text += ch;

		refreshText();

	}

}

function loadFont() {

	var loader = new THREE.FontLoader();
	loader.load( 'fonts/Aktiv_Grotesk_Regular.json', function ( response ) {

		font = response;

		refreshText();

	} );

}

function createText() {

	textGeo = new THREE.TextBufferGeometry( text, {

		font: font,

		size: size,
		height: height,
		curveSegments: curveSegments,

		bevelThickness: bevelThickness,
		bevelSize: bevelSize,
		bevelEnabled: bevelEnabled,

		material: 0,
		extrudeMaterial: 1

	});

	textGeo.computeBoundingBox();
	textGeo.computeVertexNormals();

	// "fix" side normals by removing z-component of normals for side faces
	// (this doesn't work well for beveled geometry as then we lose nice curvature around z-axis)

	if ( ! bevelEnabled ) {

		var triangleAreaHeuristics = 0.1 * ( height * size );

		for ( var i = 0; i < textGeo.faces.length; i ++ ) {

			var face = textGeo.faces[ i ];

			if ( face.materialIndex == 1 ) {

				for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

					face.vertexNormals[ j ].z = 0;
					face.vertexNormals[ j ].normalize();

				}

				var va = textGeo.vertices[ face.a ];
				var vb = textGeo.vertices[ face.b ];
				var vc = textGeo.vertices[ face.c ];

				var s = THREE.GeometryUtils.triangleArea( va, vb, vc );

				if ( s > triangleAreaHeuristics ) {

					for ( var j = 0; j < face.vertexNormals.length; j ++ ) {

						face.vertexNormals[ j ].copy( face.normal );

					}

				}

			}

		}

	}

	var centerOffset = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );

	textMesh1 = new THREE.Mesh( textGeo, materials );

	textMesh1.position.x = centerOffset;
	textMesh1.position.y = hover;
	textMesh1.position.z = 0;

	textMesh1.rotation.x = 0;
	textMesh1.rotation.y = Math.PI * 2;

	group.add( textMesh1 );

}

function refreshText() {

	group.remove( textMesh1 );

	if ( !text ) return;

	createText();

}

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}

}

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}

}

//

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;

	camera.lookAt( cameraTarget );
  // controls.update();

	renderer.clear();
	effect.render( scene, camera );

}

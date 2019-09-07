

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 4, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var scene = new THREE.Scene();
var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometry = new THREE.Geometry();

var geometry = new THREE.BoxGeometry( 1, 2, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var cube = new THREE.Mesh( geometry, material );



var line = new THREE.Line( geometry, material );

var animate = function () {
  requestAnimationFrame( animate );
  line.rotation.x += 0.01;
  line.rotation.y += 0.009;
  line.rotation.z += 0.01;


  cube.rotation.x += 0.009;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render( scene, camera );
};

animate()

scene.add( line, cube );
renderer.render( scene, camera );



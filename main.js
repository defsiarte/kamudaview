//import * as THREE from 'three';

// all the slop
/*// Get the rendering canvas
let can=document.getElementById("can");
// Get canvas width and height
let w=parseInt(window.getComputedStyle(can).width);
let h=parseInt(window.getComputedStyle(can).height);
let mouse=[];
// Convert mouse click coordinates relative to canvas into X(-1 to +1), Y(inverted -1 to +1)
point.x= event.offsetX/w*2-1;
point.y=-event.offsetY/h*2+1;
// Create raycaster
let ray=new THREE.Raycaster();
// Generate a ray (light vector) extending straight from the mouse position
ray.setFromCamera(point,camera);
// Find coordinates of objects intersected by the ray
let s=ray.intersectObjects(scene.children);
if(s.length>0){ // If there are intersecting objects
  // Some processing
}*/
import * as THREE from 'three';

// init

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

// animation

function animation( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { gsap } from "gsap";

// rendering the scene
const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha true to make the background transparent
renderer.setClearColor(0x000000, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvas").appendChild(renderer.domElement);

// creating a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

// Load the model
const planet_name = document
  .querySelector("#info-container")
  .getAttribute("data-planet");

var loader = new GLTFLoader();
var myModel;
loader.load(`assets/glbs/${planet_name}.glb`, function (gltf) {
  console.log(gltf);
  myModel = gltf.scene;
  myModel.position.x = 3;
  if (planet_name === "saturn") {
    myModel.rotation.x = 0.3;
  }
  scene.add(myModel);
  let tl = gsap.timeline();
  tl.to(".loading-screen", {
    display: "none",
    opacity: 0,
    duration: 1,
  });
  tl.from("#info-container", {
    opacity: 0,
    duration: 1,
    scale: 0.5,
  });
  tl.from("#canvas", {
    opacity: 0,
    scale: 0.5,
  });
});

// Add light
const pointLight = new THREE.PointLight(); // point light
scene.add(pointLight);

// Position camera
camera.position.z = 8;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  if (myModel) {
    myModel.rotation.y += 0.01;
  }
}
animate();

// Activating bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

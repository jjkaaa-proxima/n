/* game.js */
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new THREE.PointerLockControls(camera, document.body);
document.body.addEventListener('click', () => controls.lock());

camera.position.y = 2;

let geometry = new THREE.BoxGeometry(1, 1, 1);
let textureLoader = new THREE.TextureLoader();

let textures = [
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/grass_side.png') }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/grass_side.png') }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/grass_top.png') }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/dirt.png') }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/grass_side.png') }),
  new THREE.MeshBasicMaterial({ map: textureLoader.load('textures/grass_side.png') })
];

function createBlock(x, y, z) {
  let cube = new THREE.Mesh(geometry, textures);
  cube.position.set(x, y, z);
  scene.add(cube);
  return cube;
}

for (let x = -10; x <= 10; x++) {
  for (let z = -10; z <= 10; z++) {
    createBlock(x, -0.5, z);
  }
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

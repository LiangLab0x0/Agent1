import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const alien = new THREE.Mesh(geometry, material);
scene.add(alien);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  alien.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

const chatEl = document.getElementById('chat');
const input = document.getElementById('message');
const sendBtn = document.getElementById('send');

function addMessage(sender, text) {
  const p = document.createElement('p');
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatEl.appendChild(p);
  chatEl.scrollTop = chatEl.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  addMessage('You', text);
  input.value = '';
  setTimeout(() => {
    const responses = [
      'Greetings, Earthling.',
      'We come in peace.',
      'Tell us about your planet.',
      'Interesting...'
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    addMessage('Alien', response);
    alien.material.color.set(Math.random() * 0xffffff);
  }, 500);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

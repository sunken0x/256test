// Minimal three.js test for 256 Art (GitHub Pages version)
function setupThree() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas); // index.html adds styles
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000); // Black background
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White cube
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;
    renderer.render(scene, camera); // Render once
    console.log('Minimal three.js test rendered on GitHub Pages.');
    window.addEventListener('resize', () => { // Basic resize
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }, false);
}
setupThree();

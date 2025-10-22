// Minimal three.js test for 256 Art (GitHub Pages version)
function setupThree() {
    // Basic Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.createElement("canvas");
    // We let the index.html handle adding the canvas and body styles
    document.body.appendChild(canvas);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        // preserveDrawingBuffer: true // Not strictly needed for GitHub Pages test
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000); // Black background

    // Simple Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White cube
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Camera Position
    camera.position.z = 2;

    // --- Render Once ---
    renderer.render(scene, camera);

    // --- No window.rendered needed for GitHub Pages test ---
    console.log('Minimal three.js test rendered on GitHub Pages.');

    // Simple resize handler for GitHub Pages
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera); // Re-render on resize
    }, false);
}

// Run the setup
setupThree();

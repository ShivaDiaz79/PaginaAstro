import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const InteractiveAnimation = () => {
  const particlesRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  let myTween;

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const distance = Math.min(200, window.innerWidth / 4);
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 1600; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0xff, size: 2 })
    );
    particlesRef.current = particles;

    const renderingParent = new THREE.Group();
    renderingParent.add(particles);

    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);

    camera.position.z = 400;

    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    document.addEventListener('mousemove', onMouseMove, false);

    // Scaling animation
    const animProps = { scale: 1, xRot: 0, yRot: 0 };
    gsap.to(animProps, {
      duration: 10,
      scale: 1.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine',
      onUpdate: function () {
        renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
      },
    });

    gsap.to(animProps, {
      duration: 120,
      xRot: Math.PI * 2,
      yRot: Math.PI * 4,
      repeat: -1,
      yoyo: true,
      ease: 'none',
      onUpdate: function () {
        renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
      },
    });

    return () => {
      if (myTween) myTween.kill();
    };
  }, []);

  function onMouseMove(event) {
    if (myTween) myTween.kill();

    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    const targetRotationX = mouseY * -0.2;
    const targetRotationY = mouseX * 0.2;

    myTween = gsap.to(particlesRef.current.rotation, {
      duration: 0.5,
      x: targetRotationX,
      y: targetRotationY,
      ease: 'power2.out',
    });
  }

  return (
    <div className="app">
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          canvas {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default InteractiveAnimation;

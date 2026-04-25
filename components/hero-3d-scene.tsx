"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makePanel(width: number, height: number, color: number) {
  const group = new THREE.Group();
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, 0.04),
    new THREE.MeshStandardMaterial({
      color,
      roughness: 0.38,
      metalness: 0.18,
      transparent: true,
      opacity: 0.78
    })
  );
  const glow = new THREE.Mesh(
    new THREE.BoxGeometry(width * 1.04, height * 1.04, 0.02),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.1
    })
  );
  glow.position.z = -0.04;
  group.add(glow, panel);
  return group;
}

export function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const container = mount;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05070d, 7, 16);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.2, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x9adbd7, 1.25);
    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(4, 6, 5);
    const coral = new THREE.PointLight(0xff7a59, 65, 9);
    coral.position.set(-3, 1.7, 3);
    const teal = new THREE.PointLight(0x35f1da, 85, 10);
    teal.position.set(3.2, 1.6, 2.6);
    scene.add(ambient, key, coral, teal);

    const root = new THREE.Group();
    scene.add(root);

    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x17202b,
      roughness: 0.24,
      metalness: 0.62
    });
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0b121a,
      emissive: 0x1dd6c8,
      emissiveIntensity: 0.28,
      roughness: 0.22,
      metalness: 0.35
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x35f1da,
      emissive: 0x35f1da,
      emissiveIntensity: 0.8,
      roughness: 0.28
    });
    const coralMat = new THREE.MeshStandardMaterial({
      color: 0xff7a59,
      emissive: 0xff5d3f,
      emissiveIntensity: 0.5,
      roughness: 0.36
    });

    const laptop = new THREE.Group();
    const keyboard = new THREE.Mesh(new THREE.BoxGeometry(3.35, 0.16, 2.05), baseMat);
    keyboard.position.set(0, -0.9, 0);
    const display = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.85, 0.12), screenMat);
    display.position.set(0, 0.24, -0.86);
    display.rotation.x = -0.1;
    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.1, 24), accentMat);
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(0, -0.68, -0.75);
    laptop.add(keyboard, display, hinge);

    for (let i = 0; i < 9; i += 1) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.15 + i * 0.06, 0.035, 0.025), accentMat);
      line.position.set(-1.15 + (i % 3) * 0.85, 0.72 - Math.floor(i / 3) * 0.38, -0.78);
      laptop.add(line);
    }
    root.add(laptop);

    const phone = new THREE.Group();
    const phoneBody = new THREE.Mesh(new THREE.BoxGeometry(0.76, 1.58, 0.12), baseMat);
    const phoneScreen = new THREE.Mesh(new THREE.BoxGeometry(0.62, 1.34, 0.04), screenMat);
    phoneScreen.position.z = 0.07;
    phone.add(phoneBody, phoneScreen);
    phone.position.set(2.15, -0.12, 0.65);
    phone.rotation.set(0.08, -0.38, 0.08);
    root.add(phone);

    const db = new THREE.Group();
    for (let i = 0; i < 3; i += 1) {
      const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.22, 48), i === 1 ? coralMat : accentMat);
      cylinder.position.y = i * 0.24;
      db.add(cylinder);
    }
    db.position.set(-2.2, -0.62, 0.62);
    db.rotation.y = 0.35;
    root.add(db);

    const panels = [
      makePanel(1.25, 0.72, 0x35f1da),
      makePanel(1.1, 0.62, 0xff7a59),
      makePanel(1.35, 0.74, 0x9ce7ff)
    ];
    panels[0].position.set(-2.35, 1.15, -0.4);
    panels[1].position.set(1.9, 1.2, -0.55);
    panels[2].position.set(0.2, 1.72, -1.2);
    panels[0].rotation.y = 0.45;
    panels[1].rotation.y = -0.55;
    panels[2].rotation.x = -0.18;
    panels.forEach((panel) => root.add(panel));

    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 4.5;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0x7ee7df,
        size: 0.025,
        transparent: true,
        opacity: 0.75
      })
    );
    scene.add(particles);

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    const clock = new THREE.Clock();

    function animate() {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = Math.sin(elapsed * 0.35) * 0.18;
      root.rotation.x = Math.sin(elapsed * 0.22) * 0.05;
      laptop.position.y = Math.sin(elapsed * 1.2) * 0.08;
      phone.position.y = -0.12 + Math.sin(elapsed * 1.5 + 1) * 0.12;
      db.rotation.y += 0.012;
      panels.forEach((panel, index) => {
        panel.position.y += Math.sin(elapsed * 1.2 + index) * 0.0018;
        panel.rotation.z = Math.sin(elapsed * 0.7 + index) * 0.045;
      });
      particles.rotation.y += 0.0016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      particlesGeometry.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      aria-label="Animated 3D developer scene"
      className="relative h-[420px] w-full overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(53,241,218,.16),transparent_36%),linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] shadow-2xl sm:h-[520px]"
      ref={mountRef}
    >
      <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-black/35 p-4 text-white backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Live 3D stack</p>
        <p className="mt-1 text-lg font-black">Next.js + React Native + MongoDB</p>
      </div>
    </div>
  );
}

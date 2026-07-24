import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import type { Group, Mesh } from 'three';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

function OrbitalScene({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null);
  const torus = useRef<Mesh>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        key: i,
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        scale: 0.02 + Math.random() * 0.04,
      })),
    []
  );

  useFrame((_, delta) => {
    if (!animate) return;
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (torus.current) {
      torus.current.rotation.x += delta * 0.25;
      torus.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 2]} intensity={1.1} color="#7ef9ff" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#34d399" />

      <Stars
        radius={40}
        depth={30}
        count={1200}
        factor={3}
        saturation={0}
        fade
        speed={animate ? 0.4 : 0}
      />

      <Float speed={animate ? 1.4 : 0} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[0, 0.1, 0]} scale={1.15}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.55}
            distort={0.35}
            speed={animate ? 1.5 : 0}
          />
        </mesh>
      </Float>

      <mesh ref={torus} position={[0, 0, 0]}>
        <torusGeometry args={[1.85, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#34d399"
          emissive="#10b981"
          emissiveIntensity={0.45}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {particles.map((p) => (
        <mesh key={p.key} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color="#a5f3fc"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop={reduced ? 'demand' : 'always'}
      >
        <Suspense fallback={null}>
          <OrbitalScene animate={!reduced} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
    </div>
  );
}

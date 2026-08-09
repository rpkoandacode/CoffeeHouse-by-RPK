import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function CoffeeCup() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

    // Smooth realistic mouse-follow
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.7,
      0.08
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.35 + 0.08,
      0.08
    );
  });

  return (
    <group ref={group} scale={0.7}>
      {/* Saucer */}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.72, 0.68, 0.05, 64]} />
        <meshStandardMaterial color="#EFE3D2" roughness={0.35} />
      </mesh>

      {/* Cup body */}
      <mesh>
        <cylinderGeometry args={[0.46, 0.40, 0.85, 64]} />
        <meshStandardMaterial
          color="#F6E9D8"
          roughness={0.25}
          metalness={0.05}
        />
      </mesh>

      {/* Latte coffee */}
      <mesh position={[0, 0.39, 0]}>
        <cylinderGeometry args={[0.39, 0.39, 0.06, 64]} />
        <meshStandardMaterial
          color="#8A5A3B"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Latte foam */}
      <mesh position={[0, 0.405, 0]}>
        <cylinderGeometry args={[0.33, 0.33, 0.015, 64]} />
        <meshStandardMaterial color="#F8F2E8" roughness={0.95} />
      </mesh>

      {/* Latte art */}
      <mesh position={[0, 0.412, 0.01]} rotation={[-0.2, 0, 0]}>
        <torusGeometry args={[0.09, 0.015, 16, 64, Math.PI]} />
        <meshStandardMaterial color="#E8D9C3" roughness={0.9} />
      </mesh>

      {/* Rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.43, 0]}>
        <torusGeometry args={[0.43, 0.018, 16, 64]} />
        <meshStandardMaterial color="#E9DCCB" roughness={0.2} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.48, 0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.15, 0.03, 16, 64]} />
        <meshStandardMaterial color="#F6E9D8" roughness={0.25} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3] }}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      <pointLight position={[-3, -2, -3]} intensity={0.5} />

      <CoffeeCup />
    </Canvas>
  );
}

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function CoffeeCup() {
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
        <cylinderGeometry args={[0.95, 0.88, 0.06, 64]} />
        <meshStandardMaterial
          color="#EFE3D2"
          roughness={0.35}
        />
      </mesh>

      {/* Cup body */}
      <mesh>
        <cylinderGeometry args={[0.46, 0.40, 0.85, 64]} />
        <meshStandardMaterial
          color="#F6E9D8"
          roughness={0.18}
          metalness={0.02}
        />
      </mesh>

      {/* Latte coffee */}
      <mesh position={[0, 0.40, 0]}>
        <cylinderGeometry args={[0.40, 0.40, 0.03, 64]} />
        <meshStandardMaterial
          color="#7B4A2E"
          roughness={0.8}
        />
      </mesh>

      {/* Latte foam */}
      <mesh position={[0, 0.415, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.012, 64]} />
        <meshStandardMaterial
          color="#F8F3EA"
          roughness={0.95}
        />
      </mesh>

      {/* Simple latte art */}
      <mesh position={[0, 0.423, 0.02]} rotation={[-0.15, 0, 0]}>
        <torusGeometry args={[0.10, 0.018, 16, 64, Math.PI]} />
        <meshStandardMaterial color="#E8DCC8" roughness={0.9} />
      </mesh>

      {/* Rim */}
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0.43, 0]}
      >
        <torusGeometry args={[0.43, 0.018, 16, 64]} />
        <meshStandardMaterial
          color="#E9DCCB"
          roughness={0.2}
        />
      </mesh>

      {/* Realistic handle */}
      <mesh
        position={[0.48, 0.02, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <torusGeometry args={[0.15, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#F6E9D8"
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}
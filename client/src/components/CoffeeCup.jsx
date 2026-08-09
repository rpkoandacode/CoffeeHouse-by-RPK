import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function CoffeeCup() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    // Mouse position (-1 to 1)
    const x = state.pointer.x;
    const y = state.pointer.y;

    // Target rotations
    const targetY = x * 0.4;
    const targetX = -y * 0.15 + 0.08;

    // Smooth cinematic movement
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.08
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.08
    );

    // Very subtle breathing motion
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
  });

  return (
    <group ref={group}>
      {/* Saucer */}
      <mesh position={[0, -0.72, 0]} receiveShadow>
        <cylinderGeometry args={[1.15, 1.05, 0.08, 64]} />
        <meshStandardMaterial color="#F0E8DD" roughness={0.35} />
      </mesh>

      {/* Cup body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.68, 0.60, 1.2, 64]} />
        <meshStandardMaterial
          color="#F3E9DC"
          roughness={0.18}
          metalness={0.02}
        />
      </mesh>

      {/* Coffee */}
      <mesh position={[0, 0.56, 0]}>
        <cylinderGeometry args={[0.60, 0.60, 0.04, 64]} />
        <meshStandardMaterial color="#3B2416" roughness={0.95} />
      </mesh>

      {/* Rim */}
      <mesh
        position={[0, 0.60, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[0.63, 0.02, 16, 64]} />
        <meshStandardMaterial color="#E8DED3" roughness={0.2} />
      </mesh>

      {/* Handle */}
      <mesh
        position={[0.72, 0.08, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <torusGeometry args={[0.22, 0.045, 16, 64]} />
        <meshStandardMaterial
          color="#F3E9DC"
          roughness={0.18}
          metalness={0.02}
        />
      </mesh>
    </group>
  );
}
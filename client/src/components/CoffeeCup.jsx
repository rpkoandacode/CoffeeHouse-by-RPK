import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

export default function CoffeeCup() {
  const group = useRef();
  const { size } = useThree(); // canvas pixel dimensions, updates on resize

  // Responsive scale based on actual canvas size (not window size),
  // since your Canvas container height changes across breakpoints too.
  const scale = useMemo(() => {
    const { width, height } = size;
    const aspect = width / height;

    let s = 0.7; // your tuned desktop baseline

    if (width < 400) {
      s = 0.52;       // small phones
    } else if (width < 640) {
      s = 0.58;       // large phones
    } else if (width < 900) {
      s = 0.64;       // tablets
    } else if (width < 1200) {
      s = 0.68;       // small laptops
    }

    // Portrait/narrow containers (phones stacked full-width but shortish
    // canvas height) need a bit more correction so the cup doesn't
    // touch the top/bottom edges.
    if (aspect < 0.85) {
      s *= 0.92;
    }

    return s;
  }, [size]);

  useFrame((state) => {
    if (!group.current) return;

    const x = state.pointer.x;
    const y = state.pointer.y;

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

  // Simple heart-shaped latte art, drawn as a flat 2D shape and
  // extruded slightly so it sits on the foam like a real milk pour.
  const heartGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const s = 0.017; // overall heart size, tuned to sit nicely on the foam

    shape.moveTo(0, -4 * s);
    shape.bezierCurveTo(-5 * s, 1 * s, -5 * s, 4 * s, 0, 2 * s);
    shape.bezierCurveTo(5 * s, 4 * s, 5 * s, 1 * s, 0, -4 * s);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.006,
      bevelEnabled: true,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 2,
    });
    geometry.center();
    return geometry;
  }, []);

  return (
    <group ref={group} scale={scale}>
      {/* Saucer base */}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.72, 0.68, 0.045, 64]} />
        <meshPhysicalMaterial
          color="#F3E7D5"
          roughness={0.28}
          metalness={0.03}
          clearcoat={0.4}
          clearcoatRoughness={0.25}
        />
      </mesh>

      {/* Saucer gold rim trim */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.556, 0]}>
        <torusGeometry args={[0.705, 0.008, 12, 64]} />
        <meshStandardMaterial color="#C9A227" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Saucer foot ring (underside) */}
      <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.35, 0.02, 12, 48]} />
        <meshStandardMaterial color="#E4D5BE" roughness={0.4} />
      </mesh>

      {/* Cup outer wall (hollow, no top cap) */}
      <mesh>
        <cylinderGeometry args={[0.46, 0.40, 0.85, 64, 1, true]} />
        <meshPhysicalMaterial
          color="#F3E7D5"
          roughness={0.2}
          metalness={0.02}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Cup bottom cap */}
      <mesh position={[0, -0.425, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.4, 64]} />
        <meshPhysicalMaterial color="#F3E7D5" roughness={0.2} metalness={0.02} clearcoat={0.5} />
      </mesh>

      {/* Cup inner wall so you don't see through to the outside above the liquid */}
      <mesh>
        <cylinderGeometry args={[0.455, 0.395, 0.85, 64, 1, true]} />
        <meshStandardMaterial color="#3A2A1E" roughness={0.3} side={THREE.BackSide} />
      </mesh>

      {/* Latte coffee (visible below foam near the rim edge) */}
      <mesh position={[0, 0.39, 0]}>
        <cylinderGeometry args={[0.39, 0.39, 0.035, 64]} />
        <meshStandardMaterial color="#7A4A2E" roughness={0.75} />
      </mesh>

      {/* Latte foam */}
      <mesh position={[0, 0.408, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.012, 64]} />
        <meshStandardMaterial color="#f5e1c0" roughness={0.9} />
      </mesh>

      {/* Simple heart latte art, laid flat on the foam */}
      <mesh
        geometry={heartGeometry}
        position={[0, 0.4155, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <meshStandardMaterial color="#8A5A3B" roughness={0.85} />
      </mesh>


      {/* Rim — gold trim to match saucer */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.43, 0]}>
        <torusGeometry args={[0.43, 0.015, 16, 64]} />
        <meshStandardMaterial color="#C9A227" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Realistic handle */}
      <mesh position={[0.48, 0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.15, 0.03, 16, 64]} />
        <meshPhysicalMaterial color="#F3E7D5" roughness={0.2} metalness={0.02} clearcoat={0.5} />
      </mesh>
    </group>
  );
}
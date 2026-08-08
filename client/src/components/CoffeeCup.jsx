import { Float } from '@react-three/drei';

export default function CoffeeCup() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group rotation={[0.2, Math.PI / 4, 0]}>
        {/* Cup body */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.7, 0.6, 1.2, 64]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Coffee surface */}
        <mesh position={[0, 0.55, 0]}>
          <cylinderGeometry args={[0.62, 0.62, 0.05, 64]} />
          <meshStandardMaterial color="#4b2e1f" roughness={0.8} />
        </mesh>

        {/* Rim */}
        <mesh position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.64, 0.03, 16, 64]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} />
        </mesh>

        {/* Handle */}
        <mesh position={[0.75, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.25, 0.05, 16, 64, Math.PI]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.7, 0]} receiveShadow>
          <cylinderGeometry args={[1.1, 1.0, 0.08, 64]} />
          <meshStandardMaterial color="#111111" roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}
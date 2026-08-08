import { Float } from '@react-three/drei';

export default function CoffeeCup() {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group rotation={[0.15, Math.PI / 5, 0]}>
        {/* Saucer */}
        <mesh position={[0, -0.72, 0]} receiveShadow>
          <cylinderGeometry args={[1.15, 1.05, 0.08, 64]} />
          <meshStandardMaterial color="#F0E8DD" roughness={0.35} />
        </mesh>

        {/* Cup body */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.68, 0.60, 1.2, 64]} />
          <meshStandardMaterial
            color="#F5F1EA"
            roughness={0.25}
            metalness={0.05}
          />
        </mesh>

        {/* Coffee */}
        <mesh position={[0, 0.56, 0]}>
          <cylinderGeometry args={[0.60, 0.60, 0.04, 64]} />
          <meshStandardMaterial color="#4B2E1F" roughness={0.9} />
        </mesh>

        {/* Rim */}
        <mesh position={[0, 0.60, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.63, 0.02, 16, 64]} />
          <meshStandardMaterial color="#E8DED3" roughness={0.2} />
        </mesh>

        {/* Handle */}
        <mesh
          position={[0.73, 0.08, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <torusGeometry args={[0.23, 0.045, 16, 64]} />
          <meshStandardMaterial
            color="#F5F1EA"
            roughness={0.25}
            metalness={0.05}
          />
        </mesh>
      </group>
    </Float>
  );
}
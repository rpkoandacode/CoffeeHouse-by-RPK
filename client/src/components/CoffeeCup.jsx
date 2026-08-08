import { Float } from '@react-three/drei';

export default function CoffeeCup() {
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group rotation={[0.15, Math.PI / 5, 0]}>
        {/* Ground shadow */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.78, 0]}
          receiveShadow
        >
          <circleGeometry args={[1.8, 64]} />
          <shadowMaterial opacity={0.25} />
        </mesh>

        {/* Saucer */}
        <mesh position={[0, -0.72, 0]} receiveShadow>
          <cylinderGeometry args={[1.15, 1.05, 0.08, 64]} />
          <meshStandardMaterial
            color="#F0E8DD"
            roughness={0.35}
          />
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
          <meshStandardMaterial
            color="#3B2416"
            roughness={0.95}
          />
        </mesh>

        {/* Rim */}
        <mesh
          position={[0, 0.60, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[0.63, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#E8DED3"
            roughness={0.2}
          />
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
    </Float>
  );
}
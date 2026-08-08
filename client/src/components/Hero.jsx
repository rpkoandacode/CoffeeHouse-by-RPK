import { Canvas } from '@react-three/fiber';

export default function Hero() {
  return (
    <section className="h-screen bg-[#1f140f]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={2} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </section>
  );
}
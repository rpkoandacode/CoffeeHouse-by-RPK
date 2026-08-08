import { useGLTF, Float } from '@react-three/drei';

export default function CoffeeCup() {
  const { scene } = useGLTF('/models/coffee-cup.glb');

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} scale={2.5} />
    </Float>
  );
}

useGLTF.preload('/models/coffeecup.glb');
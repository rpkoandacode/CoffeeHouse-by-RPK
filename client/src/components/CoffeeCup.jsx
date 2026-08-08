import { useGLTF } from '@react-three/drei';

export default function CoffeeCup() {
  const { scene } = useGLTF('/models/coffee-cup.glb');

  return (
    <primitive
      object={scene}
      scale={0.01}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
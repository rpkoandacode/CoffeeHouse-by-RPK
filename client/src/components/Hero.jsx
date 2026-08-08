import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import CoffeeCup from './CoffeeCup';

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#1f140f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f140f] via-[#2D1B16] to-[#4E342E]" />

      <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center px-8">
        <div className="text-white">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
            Premium Coffee Experience
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Brew Happiness,
            <br />
            One Cup at a Time.
          </h1>

          <p className="text-lg text-white/80 mb-8 max-w-lg">
            Freshly brewed coffee crafted with passion and served with warmth.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Menu
            </button>

            <button className="border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Visit Us
            </button>
          </div>
        </div>

        <div className="h-[600px]">
          <Canvas shadows camera={{ position: [0, 0.3, 4], fov: 35 }}>
  <color attach="background" args={["#2D1B16"]} />

  <ambientLight intensity={0.4} />

  <directionalLight
    position={[3, 5, 4]}
    intensity={2.5}
    castShadow
  />

  <pointLight
    position={[-3, 2, 2]}
    intensity={1}
    color="#F8D7A3"
  />

  <CoffeeCup />

  <Environment preset="studio" />
</Canvas>
        </div>
      </div>
    </section>
  );
}
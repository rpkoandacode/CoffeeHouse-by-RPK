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
          <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <CoffeeCup />

            <Environment preset="studio" />

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
import { Canvas } from '@react-three/fiber';
import CoffeeCup from './CoffeeCup';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#1f140f]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1f140f] via-[#2D1B16] to-[#4E342E]" />

      {/* Glow */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center px-8">
        <div className="text-white">
          <p className="text-yellow-400 uppercase tracking-[0.35em] mb-4 text-sm">
            Premium Coffee Experience
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Brew Happiness,
            <br />
            One Cup at a Time.
          </h1>

          <p className="text-lg text-white/75 max-w-lg mb-8">
            Freshly brewed coffee crafted with passion and warmth.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold">
              Explore Menu
            </button>

            <button className="border border-white/30 px-7 py-3 rounded-full">
              Visit Us
            </button>
          </div>
        </div>

        <div className="h-[600px]">
          <Canvas camera={{ position: [0, 0.2, 3.8], fov: 32 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 5, 4]} intensity={2} />
            <CoffeeCup />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
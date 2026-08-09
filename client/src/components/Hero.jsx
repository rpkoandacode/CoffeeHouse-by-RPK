import { Canvas } from '@react-three/fiber';
import CoffeeCup from './CoffeeCup';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#1a120b] via-[#2b1d14] to-[#120b08]">
      {/* Background gradient */}

      {/* Glow behind cup */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/20 blur-[140px]" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-[1.1fr_0.9fr] items-center px-8 md:px-12 lg:px-20">
        {/* Left text */}
        <div className="text-white max-w-xl md:pl-6 lg:pl-12">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm md:text-base font-medium">
            Premium Coffee Experience
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Brew
            <br />
            Happiness,
            <br />
            One Cup
            <br />
            at a Time.
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-lg mb-10 leading-8">
            Freshly brewed coffee crafted with passion, warmth, and the finest
            beans for every moment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
              Explore Menu
            </button>

            <button className="border border-white/30 px-8 py-3 rounded-full text-white hover:bg-white/10 transition duration-300">
              Visit Us
            </button>
          </div>
        </div>

        {/* Right 3D cup */}
        <div className="h-[520px] md:h-[620px]">
          <Canvas camera={{ position: [0, 0.15, 3], fov: 28 }}>
            <ambientLight intensity={0.6} />

            <directionalLight
              position={[3, 5, 4]}
              intensity={2.5}
              color="#FFF1D6"
            />

            <pointLight
              position={[-2, 1, 2]}
              intensity={1}
              color="#FFD89A"
            />

            <CoffeeCup />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
import { Canvas } from '@react-three/fiber';
import CoffeeCup from './CoffeeCup';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A120B]">
      {/* Glow behind cup */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow-400/20 blur-[140px]" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen grid md:grid-cols-2 items-center pl-10 pr-6 md:pl-20 md:pr-10 lg:pl-32 lg:pr-16">
        {/* Left text */}
        <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-2 items-center px-10 md:px-16 lg:px-24">
  <div className="text-white max-w-xl">
    <p className="text-yellow-400 uppercase tracking-[0.35em] mb-5 text-sm font-medium">
      Premium Coffee Experience
    </p>

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
      Brew Happiness,
      <br />
      One Cup at a Time.
    </h1>

    <p className="text-lg text-white/70 leading-8 mb-10">
      Freshly brewed coffee crafted with passion, warmth, and the finest beans
      for every moment.
    </p>

    <div className="flex gap-5">
      <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
        Explore Menu
      </button>

      <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition">
        Visit Us
      </button>
    </div>
  </div>

  <div className="h-[560px]">
    {/* Canvas here */}
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
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import CoffeeCup from './CoffeeCup';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#1A120B]">
      {/* Glow behind cup */}
      <div className="absolute right-1/2 sm:right-10 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 w-[280px] sm:w-[380px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[500px] rounded-full bg-yellow-400/20 blur-[100px] lg:blur-[140px]" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[100svh] grid grid-cols-1 lg:grid-cols-2 items-start lg:items-center gap-6 lg:gap-12 px-6 sm:px-8 md:px-12 lg:px-20 pt-20 pb-12 lg:py-0">
        {/* Right 3D cup — shown first on mobile */}
        <div className="order-1 lg:order-2 h-[300px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
          <Canvas camera={{ position: [0, 0.15, 3], fov: 28 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 4]} intensity={2.5} color="#FFF1D6" />
            <pointLight position={[-2, 1, 2]} intensity={1} color="#FFD89A" />
            <CoffeeCup />
          </Canvas>
        </div>

        {/* Left text */}
        <div className="order-2 lg:order-1 hero-text text-white max-w-xl text-center lg:text-left mx-auto lg:mx-0">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] lg:leading-[1.05] mb-5 sm:mb-6">
            Brew Happiness,
            <br />
            One Cup at a Time.
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-7 sm:leading-8 mb-8 sm:mb-10">
            Freshly brewed coffee crafted with passion, warmth, and the finest beans
            for every moment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            
            <Link
  to="/menu"
  className="w-full sm:w-auto sm:min-w-[200px] bg-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:bg-yellow-400 hover:shadow-yellow-400/50 hover:-translate-y-0.5 active:translate-y-0 text-center"
>
  Explore Menu
</Link>

            <button className="w-full sm:w-auto sm:min-w-[200px] border border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium text-base sm:text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 active:translate-y-0">
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
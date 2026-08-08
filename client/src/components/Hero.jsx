import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#2D1B16] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B16] via-[#3E2723] to-[#6F4E37]" />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center justify-between px-8">
        <div className="max-w-xl text-white">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
            Premium Coffee Experience
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Brew Happiness,
            <br />
            One Cup at a Time.
          </h1>

          <p className="text-lg text-white/80 mb-8">
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

        <div className="hidden md:block">
          <img
            src={heroImg}
            alt="Coffee"
            className="w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
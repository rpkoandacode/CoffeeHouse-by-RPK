export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-full px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Coffee House</h1>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Menu</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        <button className="bg-yellow-500 text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition">
          Order Now
        </button>
      </div>
    </nav>
  );
}
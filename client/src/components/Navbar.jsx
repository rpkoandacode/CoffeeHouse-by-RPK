export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Coffee House</h1>

        <div className="hidden md:flex gap-8 text-white/80">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold">
          Order Now
        </button>
      </div>
    </nav>
  );
}
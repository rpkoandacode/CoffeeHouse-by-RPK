export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-full px-8 md:px-12 py-4 md:py-5 flex items-center justify-between shadow-lg shadow-black/20">
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Coffee House
        </h1>

        <div className="hidden md:flex items-center gap-10 text-white/80 text-lg font-medium">
          <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        <button className="bg-yellow-500 text-black px-8 md:px-9 py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-md shadow-yellow-500/30 transition-all duration-300 hover:bg-yellow-400 hover:scale-105 active:scale-100">
          Order Now
        </button>
      </div>
    </nav>
  );
}
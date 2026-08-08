export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Coffee House</h1>

        <div className="hidden md:flex gap-8 text-white">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Menu</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
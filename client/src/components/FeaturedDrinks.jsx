import espresso from '../assets/menu/espresso.jpg';
import americano from '../assets/menu/americano.jpg';
import cappuccino from '../assets/menu/cappuccino.jpg';
import latte from '../assets/menu/cafe-latte.jpg';
import flatwhite from '../assets/menu/flatwhite.jpg';
import mocha from '../assets/menu/mocha.jpg';
import matcha from '../assets/menu/matcha.jpg';
import chocolate from '../assets/menu/chocolate.jpg';

const drinks = [
  {
    name: 'Espresso',
    price: 'Rp 35.000',
    image: espresso,
    description: 'Rich and concentrated with a bold, aromatic finish.',
  },
  {
    name: 'Americano',
    price: 'Rp 40.000',
    image: americano,
    description: 'Smooth espresso balanced with hot water.',
  },
  {
    name: 'Cappuccino',
    price: 'Rp 52.000',
    image: cappuccino,
    description: 'Creamy foam layered over freshly brewed espresso.',
  },
  {
    name: 'Caffè Latte',
    price: 'Rp 55.000',
    image: latte,
    description: 'Silky steamed milk with a velvety espresso base.',
  },
  {
    name: 'Flat White',
    price: 'Rp 58.000',
    image: flatwhite,
    description: 'Velvety microfoam with a stronger coffee character.',
  },
  {
    name: 'Mocha',
    price: 'Rp 62.000',
    image: mocha,
    description: 'Premium cocoa blended with rich espresso.',
  },
  {
    name: 'Matcha Latte',
    price: 'Rp 59.000',
    image: matcha,
    description: 'Ceremonial matcha whisked with creamy steamed milk.',
  },
  {
    name: 'Belgian Chocolate',
    price: 'Rp 57.000',
    image: chocolate,
    description: 'Decadent chocolate with a smooth, comforting finish.',
  },
];

export default function FeaturedDrinks() {
  return (
    <section id="menu" className="bg-[#F8F4EE] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#A67C52] uppercase tracking-[0.35em] text-sm mb-4">
            Coffee House
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1B16] mb-5">
            Our Signature Menu
          </h2>

          <div className="w-20 h-[2px] bg-[#D8C3A5] mx-auto mb-6" />

          <p className="text-[#6B5B53] max-w-2xl mx-auto text-lg leading-8">
            Crafted with premium beans and carefully selected ingredients,
            designed to bring warmth and comfort in every cup.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E9DED2] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Price badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-semibold text-[#2D1B16]">
                  {drink.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2D1B16] mb-3">
                  {drink.name}
                </h3>

                <p className="text-[#6B5B53] text-sm leading-7 mb-6 min-h-[72px]">
                  {drink.description}
                </p>

                {/* Add to Cart */}
                <button className="w-full bg-[#2D1B16] text-white py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#4E342E] hover:shadow-lg hover:shadow-[#2D1B16]/20 active:scale-[0.98]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
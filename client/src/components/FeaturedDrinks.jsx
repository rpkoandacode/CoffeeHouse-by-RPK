import { useState } from 'react';
import { motion } from 'framer-motion';

import espresso from '../assets/menu/espresso.jpg';
import americano from '../assets/menu/americano.jpg';
import cappuccino from '../assets/menu/cappuccino.jpg';
import latte from '../assets/menu/cafe-latte.jpg';
import flatwhite from '../assets/menu/flatwhite.jpg';
import mocha from '../assets/menu/mocha.jpg';
import matcha from '../assets/menu/matcha.jpg';
import chocolate from '../assets/menu/chocolate.jpg';

const menuItems = [
  {
    name: 'Espresso',
    category: 'Coffee',
    price: 'Rp 35.000',
    image: espresso,
    description: 'Rich and concentrated espresso with a bold, aromatic finish.',
  },
  {
    name: 'Americano',
    category: 'Coffee',
    price: 'Rp 40.000',
    image: americano,
    description: 'Smooth espresso balanced with hot water for a clean finish.',
  },
  {
    name: 'Cappuccino',
    category: 'Coffee',
    price: 'Rp 52.000',
    image: cappuccino,
    description: 'Creamy steamed milk and velvety foam over fresh espresso.',
  },
  {
    name: 'Caffè Latte',
    category: 'Coffee',
    price: 'Rp 55.000',
    image: latte,
    description: 'Silky steamed milk with a balanced espresso base.',
  },
  {
    name: 'Flat White',
    category: 'Coffee',
    price: 'Rp 58.000',
    image: flatwhite,
    description: 'Velvety microfoam with a stronger coffee character.',
  },
  {
    name: 'Mocha',
    category: 'Coffee',
    price: 'Rp 62.000',
    image: mocha,
    description: 'Premium chocolate blended with rich espresso and milk.',
  },
  {
    name: 'Matcha Latte',
    category: 'Non-Coffee',
    price: 'Rp 59.000',
    image: matcha,
    description: 'Ceremonial matcha whisked with creamy steamed milk.',
  },
  {
    name: 'Belgian Chocolate',
    category: 'Non-Coffee',
    price: 'Rp 57.000',
    image: chocolate,
    description: 'Decadent Belgian chocolate with a smooth finish.',
  },
];

const categories = ['Coffee', 'Non-Coffee', 'Food'];

export default function FeaturedDrinks() {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const filtered =
    activeCategory === 'Food'
      ? []
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-[#F8F5F2] pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#A67C52] uppercase tracking-[0.28em] text-sm mb-4">
            Coffee House
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#2D1B16] mb-5"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Featured drinks
          </h2>

          <p className="max-w-2xl text-[#6B5B53] text-lg leading-8">
            Handcrafted coffee and specialty beverages prepared with carefully
            selected beans and artisanal ingredients.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#2D1B16] text-white'
                  : 'border border-[#D8C3A5] text-[#2D1B16] hover:bg-[#F1E9DF]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filtered.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-[24px] overflow-hidden border border-[#E9DED2] shadow-[0_8px_24px_rgba(45,27,22,0.08)] hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(45,27,22,0.16)] transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7 flex flex-col min-h-[250px]">
                <h3
                  className="text-2xl text-[#2D1B16] mb-3"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {item.name}
                </h3>

                <p className="text-[#6B5B53] leading-7 mb-6 flex-1">
                  {item.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-[#8B735F] mb-1">
                    Starting from
                  </p>
                  <p className="text-xl font-semibold text-[#A67C52]">
                    {item.price}
                  </p>
                </div>

                <button className="w-full bg-[#2D1B16] text-white py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:bg-[#1F1510]">
                  Select specifications
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
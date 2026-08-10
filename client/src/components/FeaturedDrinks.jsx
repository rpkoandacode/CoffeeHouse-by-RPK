import { useEffect, useRef, useState } from 'react';
import espresso from '../assets/menu/espresso.jpg';
import americano from '../assets/menu/americano.jpg';
import cappuccino from '../assets/menu/cappuccino.jpg';
import latte from '../assets/menu/cafe-latte.jpg';
import flatwhite from '../assets/menu/flatwhite.jpg';
import mocha from '../assets/menu/mocha.jpg';
import matcha from '../assets/menu/matcha.jpg';
import chocolate from '../assets/menu/chocolate.jpg';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const MENU_ITEMS = [
  {
    name: 'Espresso',
    price: 'Rp 35.000',
    image: espresso,
    description: 'Rich and concentrated, pulled to order with a bold, aromatic finish.',
  },
  {
    name: 'Americano',
    price: 'Rp 40.000',
    image: americano,
    description: 'Smooth double espresso balanced with hot water for a clean, rounded cup.',
  },
  {
    name: 'Cappuccino',
    price: 'Rp 52.000',
    image: cappuccino,
    description: 'Equal parts espresso, steamed milk, and airy foam — a café classic.',
  },
  {
    name: 'Caffè Latte',
    price: 'Rp 55.000',
    image: latte,
    description: 'Silky steamed milk poured over a velvety double espresso base.',
  },
  {
    name: 'Flat White',
    price: 'Rp 58.000',
    image: flatwhite,
    description: 'Velvety microfoam with a stronger, more pronounced coffee character.',
  },
  {
    name: 'Mocha',
    price: 'Rp 62.000',
    image: mocha,
    description: 'Premium dark cocoa blended with rich espresso and steamed milk.',
  },
  {
    name: 'Matcha Latte',
    price: 'Rp 59.000',
    image: matcha,
    description: 'Ceremonial-grade matcha whisked smooth with creamy steamed milk.',
  },
  {
    name: 'Belgian Chocolate',
    price: 'Rp 57.000',
    image: chocolate,
    description: 'Decadent Belgian chocolate melted into a warm, comforting finish.',
  },
];

// ---------------------------------------------------------------------------
// Signature glyph — a simple line-art espresso cup, used sparingly as the
// section's one recurring visual mark (header divider + corner seal).
// ---------------------------------------------------------------------------
function CupMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M17 10.5h1.4a2.5 2.5 0 1 1 0 5H17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.3 5.4c-.6-.7-.6-1.5 0-2.2M11.7 5.4c-.6-.7-.6-1.5 0-2.2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Reveals its children once they scroll into view, then stays put.
// ---------------------------------------------------------------------------
function useRevealOnScroll(threshold = 0.18) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -64px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

function MenuCard({ item, staggerIndex }) {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: isVisible ? `${(staggerIndex % 3) * 100}ms` : '0ms' }}
      className={[
        'group relative flex flex-col overflow-hidden rounded-[24px] bg-[#FBF8F2]',
        'shadow-[0_18px_40px_-24px_rgba(36,23,18,0.35)]',
        'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        'hover:-translate-y-2.5 hover:shadow-[0_34px_70px_-24px_rgba(36,23,18,0.45)]',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
      ].join(' ')}
    >
      {/* Portrait image with name overlaid at the base */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B120D]/85 via-[#1B120D]/15 to-transparent" />

        {/* Corner seal — decorative signature mark, not a price */}
        <div className="absolute -right-2 -top-2 flex h-12 w-12 -rotate-6 items-center justify-center rounded-full border border-white/50 bg-white/90 shadow-md backdrop-blur-sm">
          <CupMark className="h-5 w-5 text-[#B5652E]" />
        </div>

        <h3
          className="absolute inset-x-0 bottom-0 p-6 text-3xl italic text-white"
          style={{ fontFamily: "'Newsreader', serif" }}
        >
          {item.name}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="mb-6 min-h-[3.6rem] text-sm leading-6 text-[#6F5B4E]">
          {item.description}
        </p>

        <div className="mb-6 mt-auto flex items-baseline justify-between border-t border-[#E7DCC8] pt-4">
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#B5652E]">
            Starting from
          </span>
          <span className="text-lg font-semibold text-[#241712]">{item.price}</span>
        </div>

        <button
          type="button"
          className="w-full rounded-full border border-[#241712] py-3.5 text-sm font-medium tracking-wide text-[#241712] transition-colors duration-300 group-hover:bg-[#241712] group-hover:text-white active:scale-[0.98]"
        >
          Select specifications
        </button>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------
export default function FeaturedDrinks() {
  return (
    <section
      id="menu"
      className="bg-[#F6F1E7] py-24 sm:py-28 lg:py-32"
      style={{ paddingLeft: 'clamp(1.5rem, 6vw, 6rem)', paddingRight: 'clamp(1.5rem, 6vw, 6rem)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center lg:mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#B5652E]">
            The Menu
          </p>

          <h2
            className="mb-6 text-4xl italic text-[#241712] sm:text-5xl"
            style={{ fontFamily: "'Newsreader', serif" }}
          >
            Featured Drinks
          </h2>

          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D9C7AE]" />
            <CupMark className="h-4 w-4 text-[#B5652E]" />
            <span className="h-px w-12 bg-[#D9C7AE]" />
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6F5B4E]">
            A short list of what we do best — pulled to order, poured with
            care, and finished with premium beans in every cup.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard key={item.name} item={item} staggerIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
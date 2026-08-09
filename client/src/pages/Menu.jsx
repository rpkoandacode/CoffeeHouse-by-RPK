import Navbar from '../components/Navbar';
import FeaturedDrinks from '../components/FeaturedDrinks';

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <FeaturedDrinks />
      </div>
    </>
  );
}
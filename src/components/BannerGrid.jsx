import { Link } from 'react-router-dom';
import BannerGrid1 from '../assets/BannerGrid1.jpg';
import BannerGrid2 from '../assets/BannerGrid2.jpg';
import BannerGrid3 from '../assets/BannerGrid3.jpg';

function BannerGrid() {
  return (
    <div className="m-10 grid grid-cols-2 gap-4">
      <div className="col-span-1 row-span-2">
        <Link to="/products/category/jewelery">
          <img src={BannerGrid1} alt="Banner Grid 1" className="pb-5 w-full h-full object-cover" />
        </Link>
      </div>
      <div className="col-span-1 row-span-1">
        <Link to="/products/category/men's%20clothing">
          <img src={BannerGrid2} alt="Banner Grid 2" className="w-full h-full object-cover" />
        </Link>
      </div>
      <div className="col-span-1 row-span-1">
        <Link to="/products/category/women's%20clothing">
          <img src={BannerGrid3} alt="Banner Grid 3" className="object-fit" />
        </Link>
      </div>
    </div>
  );
}

export default BannerGrid;
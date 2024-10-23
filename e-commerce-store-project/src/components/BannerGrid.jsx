import BannerGrid1 from '../assets/BannerGrid1.jpg';
import BannerGrid2 from '../assets/BannerGrid2.jpg';
import BannerGrid3 from '../assets/BannerGrid3.jpg';

function BannerGrid() {
  return (
    <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-start-1 col-end-4 row-start-1 row-end-5">
        <a href="/products/category/jewelery">
          <img src={BannerGrid1} alt="Banner Grid 1" />
        </a>
      </div>
      <div className="col-start-4 col-end-7 row-start-1 row-end-3">
        <a href="/products/category/mens-clothing">
          <img src={BannerGrid2} alt="Banner Grid 2" />
        </a>
      </div>
      <div className="col-start-4 col-end-7 row-start-3 row-end-5">
        <a href="/products/category/womens-clothing">
          <img src={BannerGrid3} alt="Banner Grid 3" />
        </a>
      </div>
    </div>
  );
}

export default BannerGrid;
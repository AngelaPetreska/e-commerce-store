import { Link, useParams} from 'react-router-dom'; 

function ProductListingPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h1>Products in {category}</h1>
      {/* Render your product list here using the "products" state */}
    </div>
  );
}

export default ProductListingPage;
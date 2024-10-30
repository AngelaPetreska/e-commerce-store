import { Link, useParams } from 'react-router-dom';

function ProductListingPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Handle the case when category is undefined
    if (!category) {
      // Display a message or redirect to a default page
      return <div>Invalid category or products not found.</div>;
    }

    // Fetch products based on the category
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h1>Products in {category}</h1>
      {/* Render your product list here using the "products" state */}
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {/* Display product details here */}
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}

export default ProductListingPage;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';

function Products({ cartItems, addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <div className="card-img-top-container">
                  <img src={`${product.images[0]}`} className="card-img-top" alt={product.title} />
                  <div className="overlay">
                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Product</Link>
                    <button onClick={() => addToCart(product)} className="btn btn-success">Add to Cart</button>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
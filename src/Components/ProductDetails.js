import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

function ProductDetails({  addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        };
        addToCart(cartItem);
    };

    if (loading) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div className="product-details-container">
                <div className="product-details-image">
                    <img src={`${product.images[0]}`} alt={product.title} />
                </div>
                <div className="product-details-info">
                    <h1>{product.title}</h1>
                    <p className="product-details-category">Category: {product.category}</p>
                    <p className="product-details-description">{product.description}</p>
                    <p className="product-details-price">Price: {product.price}$</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
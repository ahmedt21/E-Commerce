import React from 'react';
import './Cart.css';

function Cart({ cartItems, updateCartItemQuantity, removeCartItem, clearCart }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id, event) => {
    const quantity = parseInt(event.target.value);
    updateCartItemQuantity(id, quantity);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-details">
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>
            </div>
            <div className="cart-item-quantity">
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input type="number" id={`quantity-${item.id}`} value={item.quantity} onChange={(event) => handleQuantityChange(item.id, event)} />
            </div>
            <div className="cart-item-total">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => removeCartItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p className="cart-total-items">Total Items: {totalItems}</p>
        <p className="cart-total-price">Total Price: ${totalPrice.toFixed(2)}</p>
        <button className="cart-clear-button" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
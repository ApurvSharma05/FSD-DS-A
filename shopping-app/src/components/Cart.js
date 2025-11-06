import React from "react";

function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items added yet</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} (x{item.qty})</span>
            <span>₹{item.price * item.qty}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <hr />
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;

import React, { useEffect, useState } from 'react';
import './App.css';

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="container p-5">
      {CART?.map((cartItem, cartindex) => (
        <div key={cartindex} className="row mb-3 align-items-center">
          <div className="col-md-2">
            <img src={cartItem.url} width={40} alt={cartItem.name} />
          </div>
          <div className="col-md-3">
            <span>{cartItem.name}</span>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              className="btn btn-success"
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
          </div>
          <div className="col-md-3">
            <span>Rs. {cartItem.price * cartItem.quantity}</span>
          </div>
        </div>
      ))}

      <div className=" row payment">
        
          <p>
            <strong>Total:</strong> Rs.{' '}
            {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
          </p>
        <button className='btn btn-primary p-1 bnt'>
        <a href='/logged/success'>
        CheckOut
        </a>
        </button>
      </div>
    </div>
  );
}

export default CartList;

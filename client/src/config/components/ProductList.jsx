import React from 'react';
import './App.css';
function ProductList({ product, addToCart }) {
  return (
    <div className='d-flex flex-wrap'>
      {product.map((productItem, productIndex) => (
        <div key={productIndex} className='col p-3 md-1 mb-2'>
          <div className='card'>
            <img src={productItem.url} className='card-img-top img' alt={productItem.name} />
            <div className='card-body'>
              <h5 className='card-title'>{productItem.name}</h5>
              <p className='card-text'>{productItem.category}</p>
              <p className='card-text'>{productItem.seller}</p>
              <p className='card-text'>Rs. {productItem.price} /-</p>
              <button
                className='btn btn-primary'
                onClick={() => addToCart(productItem)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

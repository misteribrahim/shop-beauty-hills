import React, { useState } from 'react';

const Manicures = () => {
  const products = [
    {
      title: 'Manicure',
      description:
        'Give your hands the attention they deserve. Our skilled nail technicians will pamper you with a relaxing and revitalizing manicure, leaving your nails looking flawless and your skin feeling refreshed.',
      image: 'manicure.jpg', // Replace with the actual image file name
    },
    {
      title: 'Pedicure',
      description:
        'Treat your feet to a luxurious pedicure. Our experienced professionals will ensure your feet look and feel their best, leaving you relaxed and refreshed.',
      image: 'pedicure.jpg', // Replace with the actual image file name
    },
    // Add more products with titles, descriptions, and image paths
  ];

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="manicures-container">
      <h2 className="manicures-heading">Manicures</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-item"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="product-item-image">
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className="product-title">{product.title}</h3>
          </div>
        ))} {/* Add the closing parenthesis here */}
      </div>
      {selectedProduct && (
        <div className="product-description">
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
        </div>
      )}
      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Manicures;

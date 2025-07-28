import React, { useState, useRef, useEffect } from 'react';

const PriceSlider = ({ prodPrice, setProdPrice, products, setProductList }) => {
  const handleChange = (val) => {
    setProdPrice(val)   
    setProductList(products.filter(product => product.price <= val))
  }

  return (
    <div className="slider-container">
      <h3>Slider</h3>
      <input type="range"
        name="price"
        min={1}
        max={1000}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default PriceSlider;

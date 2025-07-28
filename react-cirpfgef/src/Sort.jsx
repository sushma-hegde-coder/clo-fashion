import React, { useState, useEffect } from "react";

function Sorting({ products, sortVal, setSortVal, productList, setProductList }) {
  const handleChange = (val) => {
    setSortVal(val)
    if (val === "relevance") {
      setProductList(products)
    }
    if (val === "itemName") {
      setProductList(products.sort((a, b) => a.title.localeCompare(b.title)))
    }
    else if (val === "higherPrice") {
      productList.sort((a, b) => b.price - a.price)
    }
    else if (val === "lowerPrice") {
      setProductList(products.sort((a, b) => a.price - b.price));
    }
  }
  return (
    <>
      <h4>Sorting</h4>
      <label style={{color: "white"}}>
        Sort by:
        <select name="selectedOption" value={sortVal} onChange={(e) => handleChange(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="itemName">Item Name</option>
          <option value="higherPrice">Higher Price</option>
          <option value="lowerPrice">Lower Price</option>
        </select>
      </label>
    </>
  )
}

export default Sorting;

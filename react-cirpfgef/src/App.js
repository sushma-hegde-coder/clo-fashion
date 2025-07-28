
import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import SearchBox from "./SearchBox";
import PricingFilter from "./PricingFilter";
import Sort from "./Sort";
import PriceSlider from "./PriceSlider";
import "./style.css"

export default function App() {
  const [products] = useFetch("https://closet-recruiting-api.azurewebsites.net/api/data");
  const [searchedItemText, setSearchedItemText] = useState("")
  const [productList, setProductList] = useState(products)
  const [filteredProducts, setFilteredProducts] = useState([]) 
  const [sortVal, setSortVal] = useState("Relevance")
  const [prodPrice, setProdPrice] = useState(0)

  useEffect(()=>{
   setProductList(products)
  },[products])

  const findItem = () => {
    let filtered = products.filter((product => product.title.includes(searchedItemText)))
    if (filtered) setFilteredProducts(filtered)
  }

  return (
    <div className="App">
      <h2>Products</h2>
      <SearchBox
        searchedItemText={searchedItemText}
        setSearchedItemText={setSearchedItemText}
        findItem={findItem}
        setFilteredProducts={setFilteredProducts}
      />

      <h4>Contents Filter</h4>
      <PricingFilter 
      products={products}
      setFilteredProducts={setFilteredProducts}
      />

      <h4>Sorting</h4>
      <Sort       
      products={products}
      sortVal={sortVal}
      setSortVal={setSortVal}
      productList={productList}  
      setProductList={setProductList}/>

      <PriceSlider 
      prodPrice={prodPrice} 
      setProdPrice={setProdPrice} 
      products={products} 
      setProductList={setProductList} />

      <h4>Contents List</h4>
      <div className="grid-container">
        {filteredProducts.length !== 0 ?
          filteredProducts.map((product) => {
            return (
              <div >
                <img className="card-image" src={product.imagePath} alt={product.title} width="300" height="600" />
                <label>{product.creator}</label>
                <p>{product.title}</p>
                <p>$ {product.price}</p>
              </div>
            )
          }) :
          productList.map((product) => {
            return (
              <div >
                <img className="card-image" src={product.imagePath} alt={product.title} width="300" height="600" />
                <label>{product.creator}</label>
                <p>{product.title}</p>
                <p>$ {product.price}</p>
              </div>
            )
          })}         
      </div>

    </div>
  );
}

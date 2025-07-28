import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [error,setError] = useState(null)

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try{
      let response = await fetch(url);
      let data= await response.json();
      console.log("products",products, data)
      setProducts(data)
    }
    catch(err){
      setError(err)
    }    
  };

  return [products, error];
}

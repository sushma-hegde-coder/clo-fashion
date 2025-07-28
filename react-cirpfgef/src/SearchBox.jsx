import React from "react";

function SearchBox({searchedItemText,setSearchedItemText, findItem, setFilteredProducts}) {
  const handleClick = (val) =>{
    setSearchedItemText(val)
    findItem();
  }
  const handleClear = () => {
    setSearchedItemText("")
    setFilteredProducts([])
  }
  return (
    <div style={{ position: 'relative', width: "88vw" }}>
    <input
      type="text"
      value={searchedItemText}
      className="product-input-box"
      placeholder="Find the items you're looking for"
      onChange={(e) => handleClick(e.target.value)}
      style={{ width: '100%', paddingRight: '30px', color:"white" }}
    />
     {searchedItemText && ( // Conditionally render the clear button
        <button
          onClick={handleClear}
          style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2em',
            color: '#aaa',
          }}
        >
          &times; {/* HTML entity for 'x' */}
        </button>
      )}   
    </div>
  )

}

export default SearchBox;
import React from 'react';
import { useState, useEffect } from "react";
import "./style.css"

function PricingFilter({products, setFilteredProducts}) {
  const [filterOption, setFilterOption] = useState([
    {
      id: 1,
      name:"Paid",
      isChecked:false
    },
    {
      id: 2,
      name:"Free",
      isChecked:false
    },
    {
      id: 3,
      name:"View Only",
      isChecked:false
    }
  ])

  const handleCheckboxChange = (id) => {   
    setFilterOption(
      filterOption.map((option) =>
        option.id === id ? { ...option, isChecked: !option.isChecked} : option
      )
    );    
  }

  const resetCheckboxes = () => {
    setFilterOption(filterOption.map((option) => ({ ...option, isChecked: false })));
  };

  return (
    <div className="price-filter" style={{ border: '1px solid rgb(46, 168, 132)', width: '88vw', height: '10vh' }}>
      <div>
        Pricing option
        {filterOption.map(option => {
          return (<label>
            <input
              type="checkbox"              
              id={`checkbox-${option.id}`}
              value={option.name}
              checked={option.isChecked}
              onChange={(e) => handleCheckboxChange(option.id)}
            />
            {option.name}
          </label>
          )
        })}
        <button onClick={resetCheckboxes}>Reset</button>
      </div>
    </div>
  );
}

export default PricingFilter;
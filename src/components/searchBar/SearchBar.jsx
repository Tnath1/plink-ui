import React, { useState } from "react";
import "./searchBar.scss";
import { CiSearch } from "react-icons/ci";

const types = ["Buy", "Rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
const switchType = (val) =>{
    setQuery((prev)=>({...prev, type: val}))
}


  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={() => switchType(type)} className= {query.type === type? "active" : ""}>
            {type}
          </button>
        ))}
      </div>
      <form action="/">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          min={0}
          max={10000000}
          name="minPrice"
          placeholder="min price"
        />
        <input
          type="number"
          min={0}
          max={10000000}
          name="maxPrice"
          placeholder="max price"
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

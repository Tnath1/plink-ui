import React from "react";
import "./fllter.scss";
import { CiSearch } from "react-icons/ci";

const Filter = () => {
  return (
    <div>
      <div className="filter">
        <h1>
          search results for <b>London</b>
        </h1>
        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City location"
            />
          </div>
        </div>
        <div className="buttom">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              {/* <option value="buy">any</option> */}
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              {/* <option value="apartment">any</option> */}
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minprice">Min Price</label>
            <input
              type="nunber"
              id="minprice"
              name="minprice"
              placeholder="any"
            />
          </div>
          <div className="item">
            <label htmlFor="maxprice">Max price</label>
            <input
              type="number"
              id="maxprice"
              name="maxprice"
              placeholder="any"
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bed  room</label>
            <input
              type="text"
              id="bedroom"
              name="bedroom"
              placeholder="any"
            />
          </div>
          <button>
            <CiSearch className="searchicon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

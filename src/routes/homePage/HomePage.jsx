import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textcontainer">
        <div className="txtwrapper">
          <h1 className="title">Find Real Estate Properties & Get Your Dream Place</h1>
          <p>
            Discover the perfect property with our comprehensive real estate
            listings. Whether you're looking to buy or rent, we provide
            a seamless experience to help you find your dream home.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1> 173</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="/bg.png" alt="background Image" />
      </div>
    </div>
  );
};

export default HomePage;

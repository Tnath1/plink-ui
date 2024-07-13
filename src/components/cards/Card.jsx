import React from "react";
import "./card.scss"
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imagecontainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textcontainer"></div>
    </div>
  );
};

export default Card;

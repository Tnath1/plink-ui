import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaBath } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imagecontainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textcontainer">
        <h2 className="title">
          <Link to={`/${item.title}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <CiLocationOn />
          <span>{item.address}</span>
        </p>
        <p className="price"> ${item.price} </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <IoBedOutline />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <FaBath className="img" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <MdOutlineSaveAlt className="img " />
            </div>
            <div className="icon">
              <MdOutlineMarkUnreadChatAlt className="img " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* 

 */
}

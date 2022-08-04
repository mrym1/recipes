import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardStyle.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.img} alt="..." />
      <div className="card-text">{props.description}</div>
      <div className="card-like-bar">
        {" "}
        <img className="card-like-icon" src={props.heartFill} alt="..." />
        <div className="like-text">
          <b>{props.likeCount}</b> Likes
        </div>
      </div>
    </div>
  );
}

export default Card;

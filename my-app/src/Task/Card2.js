import React from "react";
// import "./Card2.css";

function Card2({ title, heading, body, footer }) {
  return (
    <div className="Card-container">
      <div className="Card-title">
        <h4>{title}</h4>
      </div>
      <div className="Card-heading">
        <h3>{heading}</h3>
      </div>
      <div className="Card-body">
        <p>{body}</p>
      </div>
      <div className="Card-footer">
        <p>{footer}</p>
      </div>
    </div>
  );
}

export default Card2;

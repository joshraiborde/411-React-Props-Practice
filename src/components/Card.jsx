import React from "react";

function Card() {
  return
(
<div className="card img">
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <img className="circle-img" src={props.img} alt={props.name} />
    </div>
    <div className="bottom">
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  </div>
  );
}

export default Card;

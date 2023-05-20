import React from "react";

const Card = (props) => {
  return (
    <div className="col-6 col-md-6">
      <div className="feature">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Card;

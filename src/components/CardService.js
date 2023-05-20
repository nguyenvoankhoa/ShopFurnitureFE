import React from "react";

const CardService = (props) => {
  return (
    <div className="col-6 col-md-6 col-lg-6 mb-6">
      <div className="feature">
        <h2>{props.title}</h2>
        {props.content.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default CardService;

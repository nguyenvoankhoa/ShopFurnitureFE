import React from "react";

const ItemCarousel = (props) => {
  return (
    <div className="item mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 mx-auto">
          <div className="testimonial-block text-center">
            <blockquote>
              <p>&ldquo;{props.quote}&rdquo;</p>
            </blockquote>
            <div className="author-info">
              <h4 className="font-weight-bold">{props.author}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;

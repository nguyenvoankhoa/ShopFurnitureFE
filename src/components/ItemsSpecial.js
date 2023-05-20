import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
const ItemsSpecial = (props) => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Những nội thất bán chạy nhất</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <Link to="items" className="btn btn-secondary">
                Khám phá tất cả
              </Link>
            </p>
          </div>
          {props.items.map((item) => (
            <div className="col-md-4 col-lg-3 mb-5" key={item.id}>
              <Link to={`/items/${item.id}`} className="list-card">
                <CardItem item={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsSpecial;

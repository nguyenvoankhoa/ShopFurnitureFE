import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

const ItemsList = (data) => {
  const [list, setList] = useState(data.items);

  const optionHandler = (event) => {
    if (event) {
      const value = event.target.value;
      if (value === "0-100000") {
        // setOption({ min: 0, max: 100000 });
        filterList(0, 100000);
      } else if (value === "100000-500000") {
        // setOption({ min: 100000, max: 500000 });
        filterList(100000, 500000);
      } else if (value === "500000-1000000") {
        filterList(500000, 1000000);
      } else if (value === "1000000+") {
        filterList(1000000, 1000000000);
      } else {
        filterList(0, 1000000000);
      }
    }
  };

  const filterList = (min, max) => {
    const filteredList = data.items.filter(
      (item) => item.price > min && item.price < max
    );
    setList(filteredList);
  };

  return (
    <div className="product-section before-footer-section">
      <div className="container mb-5">
        <div className="col-lg-3 mt-5">
          <select
            className="form-control"
            id="priceRange"
            onChange={optionHandler}
          >
            <option value="All">--Chọn mức giá--</option>
            <option value="0-100000">Dưới 100.000đ</option>
            <option value="100000-500000">100.000đ - 500.000đ</option>
            <option value="500000-1000000">500.000đ - 1.000.000đ</option>
            <option value="1000000+">Trên 1.000.000đ</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {list.map((item) => (
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

export default ItemsList;

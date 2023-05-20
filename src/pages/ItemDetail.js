import React from "react";
import { json, useLoaderData } from "react-router-dom";

import InfoPromotion from "./InfoPromotion";
import ItemForm from "./ItemForm";
const ItemPage = () => {
  const loader = useLoaderData();
  const data = loader.data;

  return (
    <>
      <h1 className="mb-5 mt-5 text-center">Thông tin chi tiết</h1>
      <div className="row">
        <div className="col-lg-1 col-md-0"></div>
        <div className="col-lg-5 col-md-5">
          <img src={data.image} alt="item" style={{ width: "100%" }} />
        </div>
        <div className="col-lg-5 col-md-5">
          <h4 className="mb-3 text-center">{data.name}</h4>
          <div className="col-12 mb-3">
            <strong>Đánh giá : </strong>
            <i className="fa-solid fa-star" style={{ color: "#ef683a" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ef683a" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ef683a" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ef683a" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#ef683a" }}></i>
          </div>
          <p className="mb-3">
            <strong>Giá tiền: </strong>
            {data.price}đ
          </p>
          <p className="mb-3">
            <strong>Mô tả: </strong>
            {data.description}
          </p>
          <ItemForm className="mt-4 d-block w-50" data={data} />
          <InfoPromotion />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="col-12" style={{ height: "200px" }}></div>
    </>
  );
};

export default ItemPage;
export async function loaderItem({ params }) {
  const itemId = params.itemId;
  const res = await fetch(
    "https://shopfuriturebe-production.up.railway.app/items/" + itemId
  );
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}

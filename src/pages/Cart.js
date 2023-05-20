import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { cartItemAction } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const CartPage = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const dispatch = useDispatch();
  const removeItemFromCartHandler = (id) => {
    dispatch(cartItemAction.removeItem(id));
  };
  const addItemToCartHandler = (item) => {
    dispatch(
      cartItemAction.addItem({
        id: item.id,
        image: item.image,
        name: item.name,
        amount: 1,
        price: item.price,
      })
    );
  };
  const checkout = async (amount) => {
    if (amount === 0) {
      return;
    }
    if (token == null) {
      navigate("/login");
      return;
    }
    const postData = { amount: amount };
    const response = await fetch(
      "https://shopfuriturebe-production.up.railway.app/api/payment/create_payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    if (!response.ok) {
      throw json({ message: "can not load item" }, { status: 500 });
    }
    const data = await response.json();
    window.open(data.url, "_blank");
  };
  return (
    <Modal>
      <h5>GIỎ HÀNG</h5>
      <div
        className="cart-items-container"
        style={{ maxHeight: "40vh", overflowY: "auto", overflowX: "hidden" }}
      >
        {cartItems.map((item) => (
          <div className="row mb-3" key={item.name}>
            <div className="col-4">
              <img src={item.image} alt="ite" className={classes.image} />
            </div>
            <div className="col-5">
              <p className={classes.font}>{item.name}</p>
              <span className={classes.quantity}>{item.amount}</span>
              <p>{item.price}₫</p>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <button
                className={classes.buttonAction}
                onClick={() => {
                  removeItemFromCartHandler(item.id);
                }}
              >
                -
              </button>
              <button
                className={classes.buttonAction}
                onClick={() => {
                  addItemToCartHandler(item);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <>
          <div className={classes.total}>
            <span>TỔNG TIỀN</span>
            <span>{totalAmount}₫</span>
          </div>
        </>
      ) : (
        <p className="text-center">Chưa có sản phẩm</p>
      )}

      <div className="col-12">
        <Button onClick={props.onHideCart} className="w-50">
          Đóng
        </Button>

        <Button
          className="w-50"
          onClick={() => {
            checkout(totalAmount);
          }}
        >
          Thanh toán
        </Button>
      </div>
    </Modal>
  );
};

export default CartPage;

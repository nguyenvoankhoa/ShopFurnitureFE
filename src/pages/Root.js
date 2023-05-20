import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import CartPage from "./Cart";

const Root = () => {
  const [isShown, setShown] = useState(false);
  const showCart = () => {
    setShown(true);
  };
  const hideCart = () => {
    setShown(false);
  };
  return (
    <>
      {isShown && <CartPage onHideCart={hideCart} />}
      <Header onShowCart={showCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

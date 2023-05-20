import React from "react";
import NewItem from "../components/NewItem";

const AddItem = () => {
  const item = {
    image: "",
    name: "",
    description: "",
    price: "",
  };
  return <NewItem data={item} title="ADD" method="POST" />;
};

export default AddItem;

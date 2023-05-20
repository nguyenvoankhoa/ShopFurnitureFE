import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
const NewItem = (props) => {
  const nav = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const [image, setImage] = useState(props.data.image);
  const [name, setName] = useState(props.data.name);
  const [description, setDisciption] = useState(props.data.description);
  const [price, setPrice] = useState(props.data.price);
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDisciption(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const cancelHandler = () => {
    nav("/admin");
  };
  const editItemHandler = async (e) => {
    e.preventDefault();
    if (
      image.length > 0 &&
      name.length > 0 &&
      description.length > 0 &&
      price > 0
    ) {
      const putData = {
        image: image,
        name: name,
        description: description,
        price: price,
      };
      let url;
      if (props.method === "PUT") {
        url =
          "https://shopfuriturebe-production.up.railway.app/auth/admin/update/" +
          props.data.id;
      } else if (props.method === "POST") {
        url =
          "https://shopfuriturebe-production.up.railway.app/auth/admin/post";
      }
      const response = await fetch(url, {
        method: props.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(putData),
      });
      if (response.status === 403) {
        nav("/");
        return;
      }

      if (!response.ok) {
        throw json({ message: "Could not do this action." }, { status: 500 });
      }
      nav("/admin");
    } else {
      alert("Nhập đầy đủ thông tin.");
    }
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent" className="py-3">
        <h1>{props.title}</h1>
        <form onSubmit={editItemHandler}>
          <input
            type="text"
            id="image"
            className="fadeIn second mb-3"
            placeholder="image"
            value={image}
            onChange={handleImageChange}
          />
          <input
            type="text"
            id="name"
            className="fadeIn second mb-3"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            id="description"
            className="fadeIn second mb-3"
            placeholder="description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <input
            type="number"
            min="0"
            id="price"
            className="fadeIn second mb-3"
            placeholder="price"
            value={price}
            onChange={handlePriceChange}
          />
          <div className="row">
            <div className="col-6">
              <input
                type="button"
                className="fadeIn fourth"
                value="Cancel"
                onClick={cancelHandler}
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                className="fadeIn fourth"
                value={props.title}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewItem;

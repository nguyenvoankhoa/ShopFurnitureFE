import React from "react";
import { useLoaderData, json } from "react-router-dom";
import NewItem from "../components/NewItem";

const EditItem = () => {
  const item = useLoaderData();
  return <NewItem data={item} title="EDIT" method="PUT" />;
};

export default EditItem;

export async function loadEditedItem({ params }) {
  const id = params.itemId;
  const response = await fetch(
    "https://shopfuriturebe-production.up.railway.app/items/" + id
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch item." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.data;
  }
}

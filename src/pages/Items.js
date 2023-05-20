import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ItemsList from "../components/ItemsList";
const Items = () => {
  const data = useLoaderData();
  return <ItemsList items={data} />;
};

export default Items;

export async function loader() {
  const res = await fetch(
    "https://shopfuriturebe-production.up.railway.app/items"
  );
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}

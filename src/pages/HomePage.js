import React from "react";
import Banner from "../components/Banner";
import ItemsSpecial from "../components/ItemsSpecial";
import { useLoaderData, json } from "react-router-dom";
import WeHelpSection from "../components/WeHelpSection";
const title = "Modern Interior";
const content =
  "Mỗi một chi tiết, mỗi một sản phẩm và hình ảnh đều là những dấu ấn, là câu chuyện mà MOHO muốn gửi gắm đến mỗi khách hàng. MOHO hi vọng trong từng bộ sưu tập, từng sản phẩm và dịch vụ của mình sẽ trở thành một phần trong tổ ấm của mỗi gia đình Việt, như một thông điệp mang yêu thương gửi trọn trong từng không gian sống. Hướng đến sự tiện ích, hiện đại tối giản và thân thiện môi trường là khát khao mà MOHO không ngừng theo đuổi. ";
const HomePage = () => {
  const items = useLoaderData();
  return (
    <>
      <Banner
        title={title}
        content={content}
        buttonVisible={true}
        imageVisible={true}
      />
      <ItemsSpecial items={items} />
      <WeHelpSection />
    </>
  );
};

export default HomePage;

export async function loader() {
  const res = await fetch(
    "https://shopfuriturebe-production.up.railway.app/items/special"
  );
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}

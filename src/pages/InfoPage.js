import React from "react";
import Banner from "../components/Banner";
import InfoDetail from "../components/InfoDetail";
const title = "About us";
const content =
  "“Tính bền vững” là một khái niệm định nghĩa sự phát triển về mọi mặt nhưng vẫn đảm bảo sự tồn tại phát triển ở trạng thái cân bằng. Mang khái niệm “bền vững” vào trong sản phẩm - dịch vụ nội thất là bước đi tiên phong và đầy thách thức mà MOHO luôn không ngừng nỗ lực nhằm lan toả, truyền cảm hứng về một lối sống tích cực, tiêu dùng bền vững hơn vì một tương lai của hành tinh xanh. ";
const InfoPage = () => {
  return (
    <>
      <Banner
        title={title}
        content={content}
        buttonVisible={false}
        imageVisible={true}
      />
      <InfoDetail />
    </>
  );
};

export default InfoPage;

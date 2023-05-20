import React from "react";
import Banner from "../components/Banner";
import ServiceDetail from "../components/ServiceDetail";
const title = "Khách Hàng Thân Thiết – MOHOmie";
const content = "MOHOmie – Become MOHO’s homies";
const ServicePage = () => {
  return (
    <>
      <Banner
        title={title}
        content={content}
        buttonVisible={false}
        imageVisible={true}
      />
      <ServiceDetail />
    </>
  );
};

export default ServicePage;

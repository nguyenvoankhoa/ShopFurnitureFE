import React from "react";
import Card from "./Card";

const AboutDetail = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              Đối với MOHO, mỗi quý khách hàng đều là “người thân” – “homie” của
              MOHO, người mà MOHO luôn trân quý.
            </p>
            <div className="row my-5">
              <Card
                title="CHẤT LƯỢNG QUỐC TẾ"
                content="Sản xuất trực tiếp tại nhà máy Savimex với công nghệ hiện đại cùng đội ngũ thợ tay nghề cao. Nhà máy chế biến gỗ đầu tiên tại Việt Nam đạt chứng nhận hệ thống quản lý môi trường đạt chuẩn quốc tế ISO 14001."
              />
              <Card
                title="TRẢI NGHIỆM TỐT NHẤT"
                content="Tham quan và trải nghiệm cửa hàng nội thất của MOHO với lối kiến trúc không gian mở hiện đại, các sản phẩm nội thất được bố trí theo từng không gian và phong cách nội thất, mang đến trải nghiệm mua sắm tuyệt vời cho khách hàng."
              />
              <Card
                title="TINH TẾ TRONG TỪNG ĐƯỜNG NÉT"
                content="Chúng tôi tạo ra không gian sống tuyệt vời nhất, nơi chúng tôi gọi là “Nhà”."
              />
              <Card
                title="AN TOÀN SỨC KHOẺ"
                content="Đặt yếu tố sức khoẻ và an toàn khách hàng lên hàng đầu, các sản phẩm nội thất gỗ công nghiệp tại MOHO"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-wrap">
              <img
                src="https://file.hstatic.net/200000065946/file/noi-that-moho-ben-vung-fsc_9f0b5_d1f6c79c916c41179ced29c23c4e70e6.jpg"
                alt="Img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;

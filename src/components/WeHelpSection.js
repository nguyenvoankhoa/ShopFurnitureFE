import React from "react";
import { Button } from "react-bootstrap";

const WeHelpSection = () => {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img
                  src="https://file.hstatic.net/200000065946/file/noi_that_moho_trong_rung_ngap_man_tai_soc_trang_hanh_phuc_xanh_2023_5999da68355a4476ad0d25f384d989ce_grande.png"
                  alt="Untree.co"
                />
              </div>
              <div className="grid grid-2">
                <img
                  src="https://file.hstatic.net/200000065946/article/noi-that-moho-khai-truong-cua-hang-showroom-ha-noi_6ce6564dca0045db87fec35a50dff12c_1024x1024.jpg"
                  alt="Untree.co"
                />
              </div>
              <div className="grid grid-3">
                <img
                  src="https://file.hstatic.net/200000065946/file/van-phong-cong-ty-thiet-ke-noi-that-dghome_9c6f3311175b4927a29f6ce6d46455a8.jpg"
                  alt="Untree.co"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Là thương hiệu nội thất tiên phong về giá trị bền vững, Nội Thất
              MOHO luôn hướng đến những hoạt động vì môi trường nhằm lan tỏa lối
              sống xanh. Từ 21/03/2023, MOHO tham gia dự án trồng rừng ngập mặn
              tại tỉnh Sóc Trăng, thuộc chương trình Hạnh Phúc Xanh, Quỹ Hỗ trợ
              Phát triển Cộng đồng Sống bền vững, nhằm tăng diện tích rừng ngập
              mặn góp phần bảo vệ đời sống và sinh kế của cộng đồng địa phương
              trước tác động của thiên tai và biến đổi khí hậu, thúc đẩy việc
              bảo vệ và phát triển rừng ngập mặn tại khu vực và Việt Nam.
            </p>

            <ul className="list-unstyled custom-list my-4">
              <li>Tác động môi trường</li>
              <li>Tác động xã hội</li>
              <li>Giá trị vượt trội</li>
              <li>Dịch vụ chuyên nghiệp</li>
            </ul>
            <p>
              <Button to="" className="btn">
                Khám phá
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelpSection;

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h1 className="d-flex align-items-center">NỘI THẤT MOHO</h1>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-8">
            <div className="mb-4 footer-logo-wrap">
              <Link to="/" className="footer-logo">
                MOHO<span>.</span>
              </Link>
            </div>
            <p className="mb-4 col-lg-8 col-sm-12 col-md-12">
              Chúng tôi tạo ra không gian sống tuyệt vời nhất, nơi chúng tôi gọi
              là “Nhà”. "Điều tôi muốn xây dựng ở đây là mang đến những thiết kế
              cao cấp dành riêng cho người Việt. Tôi muốn giúp khách hàng cá
              nhân hoá không gian sống thật sự phù hợp và lý tưởng. MOHO, chúng
              tôi làm tất cả vì khách hàng." Mr. Nicolai Lehn - Giám đốc thiết
              kế của MOHO.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Knowledge base</Link>
                  </li>
                  <li>
                    <Link to="/">Live chat</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">Our team</Link>
                  </li>
                  <li>
                    <Link to="/">Leadership</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <Link to="/">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

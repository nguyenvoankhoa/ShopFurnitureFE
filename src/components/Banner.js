import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "./BannerImage";

const Banner = (props) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{props.title}</h1>
              <p className="mb-4">{props.content}</p>
              {props.buttonVisible && (
                <>
                  <p>
                    <Link to="service" className="btn btn-secondary me-2">
                      Dịch vụ
                    </Link>
                    <Link to="about" className="btn btn-white-outline">
                      Thông tin
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
          {props.imageVisible && <BannerImage />}
        </div>
      </div>
    </div>
  );
};

export default Banner;

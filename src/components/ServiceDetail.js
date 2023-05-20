import React from "react";
import CardService from "./CardService";
const content1 = [
  "- 100,000đ tương đương với 1 điểm. Điểm sẽ tự động được tích khi đơn hàng đã thanh toán thành công",
  "- Khi tích đủ 20 điểm tương đương với 2,000,000đ; quý khách hàng sẽ trở thành Khách Hàng Thân Thiết – MOHOmie của MOHO.",
];
const content2 = [
  "- MOHOmie Bronze (Hạng Đồng): tích lũy điểm đạt 20 điểm tương đương với 2,000,000đ.",
  "- MOHOmie Silver (Hạng Bạc): tích lũy điểm đạt 50 điểm tương đương với 5,000,000đ.",
  "- MOHOmie Gold (Hạng Vàng): tích lũy điểm đạt 150 điểm tương đương với 15,000,000đ.",
  "- MOHOmie Diamond (Hạng Kim Cương): tích lũy điểm đạt 500 điểmtương đương với 50,000,000đ. ",
];
const content3 = [
  "- MOHOmie Bronze (Hạng Đồng): hạng khởi tạo, chưa có ưu đãi.",
  "- MOHOmie Silver (Hạng Bạc): giảm giá 5% cho tất cả đơn hàng.",
  "- MOHOmie Gold (Hạng Vàng): giảm giá 7% cho tất cả đơn hàng.",
  "- MOHOmie Diamond (Hạng Kim Cương): giảm giá 10% cho tất cả đơn hàng.",
];
const content4 = [
  "- Ưu đãi giảm giá của hạng khách hàng không áp dụng đồng thời với các chương trình khuyến mại khác. ",
  "- Điểm tích lũy sẽ bị xóa sau 365 ngày quý khách hàng không phát sinh đơn hàng mới hoặc có phát sinh đơn hàng mới nhưng không giao hàng thành công đơn hàng đó. ",
  "- Quyết định của Nội Thất MOHO là quyết định cuối cùng và có thể thay đổi mà không cần thông báo trước. ",
  "- Chính sách này không áp dụng cho các sản phẩm trong danh mục Đồ Trang Trí. ",
];
const ServiceDetail = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row my-5">
          <CardService title="1. Cách tích điểm:" content={content1} />
          <CardService title="2. Hạng khách hàng:" content={content2} />
          <CardService title="3. Ưu đãi:" content={content3} />
          <CardService title="4. Lưu ý:" content={content4} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

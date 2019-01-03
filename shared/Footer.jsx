import { lifecycle } from "recompose";
import { IsMobile } from "./../helper/IsMobile";

const LifeCycle = lifecycle({
  componentDidMount() {
    if (!IsMobile()) {
      this.setState({ fontSize: "font-size-11" });
    }
  }
});

const Footer = ({ fontSize }) => (
  <footer className="py-0 bg-primary">
    <div className={`container ${fontSize}`}>
      <p className="m-0 text-center text-white">Công ty TNHH vận tải - du lịch và thương mại Quý Tâm</p>
      <p className="m-0 text-center text-white">Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội</p>
      <p className="m-0 text-center text-white">
        Hotline: <a href="tel:0913 580 831">0913 580 831</a> - <a href="tel:098 116 9988">098 116 9988</a>
      </p>
    </div>
  </footer>
);

export default LifeCycle(Footer);

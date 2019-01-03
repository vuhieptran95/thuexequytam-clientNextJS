import "../custom-css/custom-card.css";
import Loader from "../helper/Loader";

const Intro = () => (
  <div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="jumbotron myjumbotron jumbotron-fluid mb-1 flex-container text-align-left text-light">
            <div className="ml-3 mr-3">
              <h1 className="mt-2">
                Công ty TNHH vận tải - du lịch và thương mại Quý Tâm
                <br />
              </h1>
              <div className="info mt-4 ml-2">
                <p>
                  <i className="material-icons mr-3">location_on</i>
                  Địa chỉ: 41 Tổ 2 Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội
                </p>
                <p>
                  <i className="material-icons mr-3">location_city</i>
                  Trụ sở: 84 + 86 Đường Ngọc Hồi - Quốc Bảo - Văn Điển - Thanh Trì - Hà Nội
                </p>
                <p>
                  <i className="material-icons mr-3">phone_in_talk</i>
                  Hotline: <a href="tel:0913 580 831">0913 580 831</a> - <a href="tel:098 116 9988">098 116 9988</a>
                </p>
                <p>
                  <img
                    className="mr-3 pb-2"
                    src="https://storage.googleapis.com/thuexequytam-firebase/default-images/facebook-box_2.png"
                    alt="logo"
                  />
                  Facebook: <a href="https://www.facebook.com/profile.php?id=100005097907757">QUY TAM CO., LTD</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="jumbotron myjumbotron myjumbotron2 jumbotron-fluid mb-1 flex-container text-light">
            <div className="ml-3 mr-3">
              <h1 className="mt-2">
                <img className="logo" src="https://storage.googleapis.com/thuexequytam-firebase/default-images/logo3.png" alt="" />
                QUY TAM CO., LTD
                <br />
              </h1>
              <div className="info mt-4 ml-2">
                <p>
                  <i className="material-icons mr-3">receipt</i>
                  Nhận hợp đồng xe du lịch - xe ô tô tự lái
                </p>
                <p>
                  <i className="material-icons mr-3">receipt</i>
                  Nhận hợp đồng tham quan du lịch - lễ hội - hiếu hỷ
                </p>
                <p>
                  <i className="material-icons mr-3">folder_shared</i>
                  Nhận hồ sơ học lái xe ô tô - xe máy
                </p>
                <p>
                  <i className="material-icons mr-3">folder_shared</i>
                  Nhận nâng cấp đổi bằng lái xe ô tô: C - D - E - F
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default Intro;

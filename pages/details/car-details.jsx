import DefaultLayout from "./../../shared/layouts/DefaultLayout";
import { compose } from "recompose";
import { CarDetailsStatic, CarDetailsLifeCycle } from "./../../shared/HOCs/CarDetailsHOCs";
import Footer from "../../shared/Footer";
import Default from "./../../helper/Default";
import Link from "next/link";
import { ToURL } from "./../../helper/ToURL";
import { ShowLoader } from "../../helper/Loader";

const enhance = compose(
  CarDetailsStatic,
  CarDetailsLifeCycle
);

const CarDetails = ({ carDetails, h1, h2 }) => {
  let k = 0;
  return (
    <div>
      <DefaultLayout>
        <h1 className={h1}>
          Thuê xe {carDetails.brandName} {carDetails.name} {carDetails.typeName}
        </h1>
        <div className="row">
          <div className="col-lg-7">
            <div id="carousel" className="carousel slide" data-ride="false">
              <div className="carousel-inner">
                {carDetails.images.map(i => (
                  <div key={i} className={`carousel-item ${i == carDetails.mainImage ? "active" : ""}`}>
                    <img className="img-fluid" src={i} alt={carDetails.alt} />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="flex-container3 mt-2">
              {carDetails.images.map(i => (
                <div key={i} data-target="#carousel" data-slide-to={k++}>
                  <a href="">
                    <img className="img-fluid" src={i} width="150" height="97.5" alt={carDetails.alt} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 mt-4 font-size-13">
            <div className="row">
              <div className="col-lg-12">
                <h2 className={h2}>Thông tin chi tiết:</h2>
              </div>
            </div>
            <div className="form-group row mb-0">
              <label className="col-sm-3 col-4 col-form-label font-weight-700">Tên xe</label>
              <div className="col-sm-9 col-8">
                <input type="text" readOnly className="form-control-plaintext" value={carDetails.name} />
              </div>
            </div>
            <div className="form-group row mb-0">
              <label className="col-sm-3 col-4 col-form-label font-weight-700">Hãng xe</label>
              <div className="col-sm-9 col-8">
                <input type="text" readOnly className="form-control-plaintext" value={carDetails.brandName} />
              </div>
            </div>
            <div className="form-group row mb-0">
              <label className="col-sm-3 col-4 col-form-label font-weight-700">Loại xe</label>
              <div className="col-sm-9 col-8 mt-1">
                <Link
                  as={`/${Default.urlType}/${carDetails.typeId}/thue-xe-${ToURL(carDetails.typeName)}#point`}
                  href={`/details/type-details?id=${carDetails.typeId}`}
                >
                  <a onClick={() => ShowLoader()}>{carDetails.typeName}</a>
                </Link>
              </div>
            </div>
            <div className="form-group row mb-0">
              <label className="col-sm-3 col-4 col-form-label font-weight-700">Liên hệ</label>
              <div className="col-sm-9 col-8 mt-1">
                <a href="tel:0913 580 831">0913 580 831</a>
              </div>
            </div>
            <div className="form-group row mb-0">
              <label className="col-sm-3 col-4 col-form-label font-weight-700" />
              <div className="col-sm-9 col-8 mt-0">
                <a href="tel:098 116 9988">098 116 9988</a>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
      <Footer />
    </div>
  );
};

export default enhance(CarDetails);

import Footer from "./../shared/Footer";
import { WithMessage } from "./../shared/HOCs/FormHOCs";
import { WithHomeHandlers, HomeStaticTransition, HomeLifeCycle } from "./../shared/HOCs/HomeHOCs";
import HomeHead from "../heads/HomeHead";
import { compose } from "recompose";
import { HomeSetStatic } from "./../shared/HOCs/HomeHOCs";
import Link from "next/link";
import DefaultLayoutWithIntro from "./../shared/layouts/DefaultLayoutWithIntro";
import { ToURL } from "./../helper/ToURL";
import Default from "./../helper/Default";
import Loader, { ShowLoader } from "../helper/Loader";
import CarDetailsLink from "../shared/CarDetailsLink";

const enhance = compose(
  // HomeStaticTransition,
  HomeSetStatic,
  // WithMessage,
  WithHomeHandlers,
  HomeLifeCycle
);

const Home = ({ defaultTypes, handleTest }) => (
  <div>
    <DefaultLayoutWithIntro>
      <HomeHead />
      <button hidden className="btn btn-primary" onClick={handleTest}>
        Test only
      </button>
      {defaultTypes &&
        defaultTypes.map(
          type =>
            type && (
              <div key={type.id}>
                <div className="row">
                  <div className="col-md-9 mt-3">
                    <h2>
                      <Link
                        scroll={false}
                        as={`/${Default.urlType}/${type.id}/thue-xe-${ToURL(type.name)}#point`}
                        href={`/details/type-details?id=${type.id}`}
                      >
                        <a onClick={() => ShowLoader()}>Thuê xe {type.name}</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="col-md-3" />
                </div>
                <div className="row">
                  {type.listCars &&
                    type.listCars.map(car => (
                      <div key={car.id} className="col-lg-3 col-md-6 mb-4">
                        <div className="card text-center">
                          <img className="card-img-top" src={car.thumbnail} alt={car.alt} />
                          <div className="card-body">
                            <h3 className="card-title font-size-15">
                              {car.brandName} {car.name}
                            </h3>
                            <p className="lead mb-1">
                              <i className="material-icons">phone_in_talk</i> 0913 580 831
                            </p>
                            <p className="lead mb-1">
                              <i className="material-icons">phone_in_talk</i> 098 116 9988
                            </p>
                          </div>
                          <div className="card-footer text-center">
                            <CarDetailsLink
                              id={car.id}
                              name={car.name}
                              brandName={car.brandName}
                              typeName={car.typeName}
                              className="btn btn-primary btn-block font-size-12"
                            >
                              Chi tiết
                            </CarDetailsLink>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )
        )}
    </DefaultLayoutWithIntro>
    <Footer />
  </div>
);

export default enhance(Home);

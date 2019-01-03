// import { WithMessage } from "./../shared/HOCs/FormHOCs";
import DefaultLayoutWithIntro from "./../../shared/layouts/DefaultLayoutWithIntro";
import { compose } from "recompose";
import { TypeDetailsSetStatic, TypesLifeCycle } from "./../../shared/HOCs/TypeDetailsHOCs";
// import { withRouter } from "next/router";
import Link from "next/link";
import Footer from "./../../shared/Footer";
import ScrollableAnchor from "react-scrollable-anchor";
import { goToAnchor, configureAnchors, goToTop } from "react-scrollable-anchor";
import CarDetailsLink from "./../../shared/CarDetailsLink";

const enhance = compose(
  TypeDetailsSetStatic,
  TypesLifeCycle
  //   WithMessage
  //   WithHomeHandlers
);

const TypeDetails = ({ typeWithCars, message, handleTest }) => (
  <div>
    <DefaultLayoutWithIntro>
      <div key={typeWithCars.id}>
        <div className="row">
          <div className="col-md-9 mt-3">
            {/* <ScrollableAnchor id={"point"}> */}
            <h2>Thuê xe {typeWithCars.name}</h2>
            {/* </ScrollableAnchor> */}
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row">
          {typeWithCars.cars &&
            typeWithCars.cars.map(car => (
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
    </DefaultLayoutWithIntro>
    <Footer />
  </div>
);

export default enhance(TypeDetails);

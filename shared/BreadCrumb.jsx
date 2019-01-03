import { withRouter } from "next/router";
import Loader from "./../helper/Loader";
import { withState } from "recompose";
import { lifecycle } from "recompose";
import { compose } from "recompose";
import Default from "./../helper/Default";
import Db from "./../config/FirebaseConfig";
import CarDetailsLink from "./CarDetailsLink";
import { HomeLink } from "./HomeLink";
import { TypeDetailsLink } from "./TypeDetailsLink";
import { IsMobile } from "../helper/IsMobile";

const WithType = withState("type", "updateType", null);
const WithCar = withState("car", "updateCar", null);
const WithHome = withState("home", "updateHome", null);
const WithLifeCycle = lifecycle({
  componentDidMount() {
    var url = decodeURI(this.props.router.asPath);
    // if(IsMobile()){
    //   this.setState({})
    // }
    if (url.includes(Default.urlType)) {
      var typeId = url.split("/")[2];
      Db.collection("types")
        .doc(typeId)
        .get()
        .then(doc => this.props.updateType(doc.data()));
    } else if (url.includes(Default.urlCar)) {
      var carId = url.split("/")[2];
      Db.collection("cars")
        .doc(carId)
        .get()
        .then(doc => this.props.updateCar(doc.data()));
    } else {
      this.props.updateHome(1);
    }
  }
});

const enhance = compose(
  WithType,
  WithCar,
  WithHome,
  withRouter,
  WithLifeCycle
);

export const BreadCrumb = enhance(({ router, type, car, home, nav }) => {
  return (
    <nav className="mt-2 sticky-top font-size-11" aria-label="breadcrumb">
      {type && (
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <HomeLink>Trang chủ</HomeLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* <TypeLink id={type.id} name={type.name}> */}
            Thuê xe {type.name}
            {/* </TypeLink> */}
          </li>
        </ol>
      )}
      {car && (
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <HomeLink>Trang chủ</HomeLink>
          </li>
          <li className="breadcrumb-item ">
            <TypeDetailsLink id={car.typeId} name={car.typeName}>
              Thuê xe {car.typeName}
            </TypeDetailsLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {/* <CarDetailsLink id={car.id} name={car.name} brandName={car.brandName} typeName={car.typeName}> */}
            {car.brandName} {car.name}
            {/* </CarDetailsLink> */}
          </li>
        </ol>
      )}
      {home && (
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Trang chủ
          </li>
        </ol>
      )}
      <Loader />
      {/* <Loader /> */}
    </nav>
  );
});

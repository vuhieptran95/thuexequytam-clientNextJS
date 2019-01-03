import { setStatic, lifecycle } from "recompose";
import Db from "./../../config/FirebaseConfig";
import { HideLoader } from "./../../helper/Loader";
import { IsMobile } from "../../helper/IsMobile";

export const CarDetailsStatic = setStatic("getInitialProps", async context => {
  var car = await Db.collection("cars")
    .doc(context.query.id)
    .get();
  return {
    carDetails: { id: car.id, ...car.data(), type: "", brand: "" }
  };
});

export const CarDetailsLifeCycle = lifecycle({
  componentDidMount() {
    HideLoader();
    if (IsMobile()) {
      this.setState({ h1: "font-size-20", h2: "font-size-18" });
      window.scroll({
        top: 60,
        left: 0,
        behavior: "smooth"
      });
    }
  }
});

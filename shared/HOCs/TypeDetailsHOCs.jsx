import { setStatic, lifecycle } from "recompose";
import Db from "./../../config/FirebaseConfig";
import { goToAnchor, configureAnchors, goToTop } from "react-scrollable-anchor";
import { HideLoader } from "./../../helper/Loader";
import { IsMobile } from "../../helper/IsMobile";

export const TypeDetailsSetStatic = setStatic("getInitialProps", async context => {
  // console.log(context.query.id);
  var docs = await Db.collection("cars")
    .where("typeId", "==", context.query.id)
    .get();
  var carsByType = docs.docs.map(doc => {
    return { ...doc.data(), type: "", brand: "" };
  });
  var typeName = carsByType[0].typeName;
  // var typeName = (await Db.collection("types")
  //   .doc(context.query.id)
  //   .get()).data().name;
  // goToAnchor("point", false);
  return {
    typeWithCars: { id: context.query.id, name: typeName, cars: carsByType }
  };
});

export const TypesLifeCycle = lifecycle({
  componentDidMount() {
    HideLoader();
    if (IsMobile()) {
      window.scroll({
        top: 430,
        left: 0,
        behavior: "smooth"
      });
    }
    // console.log(window.history.length);
    // console.log(window.history);
  },
  componentWillReceiveProps() {
    HideLoader();
    // console.log(window.history.length);
    // console.log(window.history);
  }
});

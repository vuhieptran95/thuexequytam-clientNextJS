import { withState, withHandlers, lifecycle, mapProps, withProps, setStatic } from "recompose";
import Db from "./../../config/FirebaseConfig";
import Default from "./../../helper/Default";
import Message from "../../helper/Message";
import { HideLoader } from "./../../helper/Loader";
import { IsMobile } from "./../../helper/IsMobile";

export const HomeSetStatic = setStatic("getInitialProps", async () => {
  var uiTypes = await Db.collection("UI_Home")
    .where("name", "==", "type")
    .get();
  return {
    defaultTypes: uiTypes.docs[0].data().display
  };
});

export const WithHomeHandlers = withHandlers({
  handleTest: props => async event => {
    // Db.collection("cars")
    //   .get()
    //   .then(docs => {
    //     docs.forEach(doc => {
    //       doc.ref.update({
    //         alt: Message.AltTextImage(doc.data().typeName, doc.data().brandName, doc.data().name)
    //       });
    //     });
    //   });
  }
});
export const HomeLifeCycle = lifecycle({
  componentDidMount() {
    HideLoader();
    if (IsMobile()) {
      window.scroll({
        top: 430,
        left: 0,
        behavior: "smooth"
      });
    }
  }
});

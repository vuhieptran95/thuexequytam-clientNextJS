import { lifecycle, withState } from "recompose";
import Db from "./../../config/FirebaseConfig";

export const WithBrands = withState("brands", "updateBrands", []);

export const EditBrandsLifeCycle = lifecycle({
  componentDidMount() {
    // Db.collection("")
  }
});

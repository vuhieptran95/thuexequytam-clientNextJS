import { withState, withHandlers, lifecycle } from "recompose";
import Db from "./../../config/FirebaseConfig";
import Default from "./../../helper/Default";
import MoveItem from "./../../helper/MoveItem";

export const WithHomeUI = withState("homeUI", "updateHomeUI", []);
export const WithSelectedCarUI = withState("selectedCarUI", "updateSelectedCarUI", { typeId: "", carId: "" });
export const WithDefaultType = withState("defaultType", "updateDefaultType", Default.DefaultType);
export const WithHomeUIHandlers = withHandlers({
  handleSubmit: props => event => {
    var i = 1;
    var k;
    props.homeUI.forEach(type => {
      Db.collection("types")
        .doc(type.id)
        .update({ order: i++ });
      k = 1;
      type.listCars.forEach(car => {
        Db.collection("cars")
          .doc(car.id)
          .update({ order: k++ });
      });
    });
    console.log(i, k);
    Db.collection("UI_Home")
      .doc(Default.HomeUIDocId)
      .update({ display: props.homeUI });
  },
  handleSelectCar: props => event => {
    event.preventDefault();
    if (event.target.name == props.selectedCarUI.typeId && event.target.value == props.selectedCarUI.carId)
      props.updateSelectedCarUI({ typeId: "", carId: "" });
    else props.updateSelectedCarUI({ typeId: event.target.name, carId: event.target.value });
  },
  handleMoveLeft: props => event => {
    event.preventDefault();
    var typeUI = props.homeUI.find(type => type.id === props.selectedCarUI.typeId);
    var newCarArray = MoveItem.MoveItemLeft(typeUI.listCars, props.selectedCarUI.carId, "id");
    if (newCarArray) {
      typeUI.listCars = newCarArray;
      props.updateHomeUI(props.homeUI);
    }
  },
  handleMoveRight: props => event => {
    event.preventDefault();
    var typeUI = props.homeUI.find(type => type.id === props.selectedCarUI.typeId);
    var newCarArray = MoveItem.MoveItemRight(typeUI.listCars, props.selectedCarUI.carId, "id");
    if (newCarArray) {
      typeUI.listCars = newCarArray;
      props.updateHomeUI(props.homeUI);
    }
  },
  handleMoveUp: props => event => {
    event.preventDefault();
    var newHomeUI = MoveItem.MoveItemLeft(props.homeUI, props.selectedCarUI.typeId, "id");
    if (newHomeUI) props.updateHomeUI(newHomeUI);
  },
  handleMoveDown: props => event => {
    event.preventDefault();
    var newHomeUI = MoveItem.MoveItemRight(props.homeUI, props.selectedCarUI.typeId, "id");
    if (newHomeUI) props.updateHomeUI(newHomeUI);
  }
});
export const HomeUILifeCycle = lifecycle({
  async componentDidMount() {
    var docs = await Db.collection("types")
      .orderBy("order", "asc")
      .get();
    var homeUIPromise = docs.docs.map(async doc => {
      var cardocs = await Db.collection("cars")
        .where("typeId", "==", doc.id)
        .orderBy("order", "asc")
        .get();
      var listCars = cardocs.docs.map(doc => {
        return { id: doc.id, ...doc.data(), type: "", brand: "" };
      });
      return { id: doc.id, name: doc.data().name, listCars: listCars };
    });
    Promise.all(homeUIPromise).then(this.props.updateHomeUI);

    var defaultDocs = await Db.collection("cars")
      .where("typeId", "==", Default.DefaultType.id)
      .get();
    var defaultCars = [];
    defaultDocs.forEach(doc => defaultCars.push({ ...doc.data(), type: "", brand: "" }));
    var defaultType = { ...Default.DefaultType, listCars: defaultCars };
    this.props.updateDefaultType(defaultType);
  }
});

import { lifecycle, withState, withHandlers } from "recompose";
import Db from "./../../config/FirebaseConfig";
import { UpdateRemoveArray } from "./../../helper/UpdateRemoveArray";
import Default from "./../../helper/Default";

export const WithEditTypes = withState("editTypes", "updateEditTypes", []);
export const WithDeletedType = withState("deletedType", "updateDeletedType", "");
export const WithEditedTypes = withState("editedTypes", "updateEditedTypes", []);
export const WithAddNewTypes = withState("addNewTypes", "updateAddNewTypes", []);
export const WithEditTypesHandlers = withHandlers({
  handleSaveType: props => async event => {
    var typeId = event.target.value;
    var typeName = document.getElementById(typeId).value;
    if (window.confirm("Muốn sửa thật không?")) {
      await Db.collection("types")
        .doc(typeId)
        .update({ name: typeName });
      var defaultValue = typeName;
      document.getElementById(typeId + "disabled").value = defaultValue;
      var editedTypes = UpdateRemoveArray(props.editedTypes, typeId);
      props.updateEditedTypes(editedTypes);
    }
  },
  handleDeleteType: props => event => {
    var typeId = event.target.value;
    event.preventDefault();
    if (window.confirm("Muốn xóa thật không?"))
      Db.collection("types")
        .doc(typeId)
        .delete();
  },
  handleCreateNewType: props => event => {
    var typeId = event.target.value;
    var type = props.addNewTypes.find(t => t.id == typeId);
    var typeName = document.getElementById(typeId).value;
    var newTypeId = typeName + Date.now();
    Db.collection("types")
      .doc(newTypeId)
      .set({
        id: newTypeId,
        name: typeName,
        order: Default.TypeOrder
      });
    var addNewTypes = UpdateRemoveArray(props.addNewTypes, type);
    props.updateAddNewTypes(addNewTypes);
  },
  handleSelectEditedType: props => event => {
    var editedTypes = UpdateRemoveArray(props.editedTypes, event.target.value);
    props.updateEditedTypes(editedTypes);
  },
  handleAddNewType: props => event => {
    var type = { id: Date.now(), name: "Tên loại xe mới" };
    var addNewTypes = props.addNewTypes.filter(nt => nt != null);
    addNewTypes.push(type);
    props.updateAddNewTypes(addNewTypes);
  },
  handleCancleAddNewType: props => event => {
    var addNewTypes = props.addNewTypes.filter(nt => nt.id != event.target.value);
    props.updateAddNewTypes(addNewTypes);
  }
});

export const EditTypesLifeCycle = lifecycle({
  componentDidMount() {
    Db.collection("types").onSnapshot(docs => {
      var types = [];
      docs.forEach(doc => {
        types.push({ id: doc.id, ...doc.data() });
      });
      this.props.updateEditTypes(types);
    });
  }
});

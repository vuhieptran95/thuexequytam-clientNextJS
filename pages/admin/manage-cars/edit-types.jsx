import ManageCarsLayout from "../../../shared/layouts/ManageCarsLayout";
import { compose } from "recompose";
import {
  WithEditTypes,
  EditTypesLifeCycle,
  WithEditedTypes,
  WithDeletedType,
  WithEditTypesHandlers,
  WithAddNewTypes
} from "./../../../shared/HOCs/EditTypesHOCs";

const enhance = compose(
  WithEditTypes,
  WithEditedTypes,
  WithDeletedType,
  WithAddNewTypes,
  WithEditTypesHandlers,
  EditTypesLifeCycle
);

const EditTypes = ({
  editTypes,
  editedTypes,
  deletedType,
  addNewTypes,
  handleSelectEditedType,
  handleSaveType,
  handleAddNewType,
  handleCancleAddNewType,
  handleCreateNewType,
  handleDeleteType
}) => (
  <ManageCarsLayout>
    <div className="container">
      <div className="row">
        <h3>This is Edit type page</h3>
      </div>
      <div className="row mb-4">
        <div className="col-lg-2">
          <button onClick={handleAddNewType} className="btn btn-success btn-block">
            Thêm mới
          </button>
        </div>
      </div>
      {editTypes.map(type => (
        <div key={type.id}>
          <div hidden={editedTypes.includes(type.id)} className="row mb-4">
            <div className="col-lg-1 col-3">
              <button onClick={handleDeleteType} value={type.id} className="btn btn-danger btn-block">
                Xóa
              </button>
            </div>
            <div className="col-lg-3 col-6">
              <input disabled type="text" id={type.id + "disabled"} className="form-control" defaultValue={type.name} name={type.id} />
            </div>
            <div className="col-lg-1 col-3">
              <button onClick={handleSelectEditedType} value={type.id} className="btn btn-warning btn-block">
                Sửa
              </button>
            </div>
          </div>
          <div hidden={!editedTypes.includes(type.id.toString())} className="row mb-4">
            <div className="col-lg-1 col-3">
              <button onClick={handleSelectEditedType} value={type.id} className="btn btn-secondary btn-block">
                X
              </button>
            </div>
            <div className="col-lg-3 col-6">
              <input type="text" className="form-control" defaultValue={type.name} id={type.id} />
            </div>
            <div className="col-lg-1 col-3">
              <button onClick={handleSaveType} value={type.id} className="btn btn-success btn-block">
                Lưu
              </button>
            </div>
          </div>
        </div>
      ))}
      {addNewTypes.map(type => (
        <div key={type.id}>
          <div className="row mb-4">
            <div className="col-lg-1 col-3">
              <button onClick={handleCancleAddNewType} value={type.id} className="btn btn-secondary btn-block">
                X
              </button>
            </div>
            <div className="col-lg-3 col-6">
              <input type="text" id={type.id} className="form-control" defaultValue={type.name} name={type.id} />
            </div>
            <div className="col-lg-1 col-3">
              <button onClick={handleCreateNewType} value={type.id} className="btn btn-success btn-block">
                Thêm
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </ManageCarsLayout>
);

export default enhance(EditTypes);

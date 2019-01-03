import ManageCarsLayout from "../../../shared/layouts/ManageCarsLayout";
import FormAddNew from "../../../shared/forms/FormAddNew";
import FormEditDelete from "./../../../shared/forms/FormEditDelete";
const EditDeleteCar = () => (
  <ManageCarsLayout>
    <div className="container">
      <div className="row">
        <h3>Chỉnh sửa xe</h3>
      </div>
      <div className="row">
        <FormEditDelete />
      </div>
    </div>
  </ManageCarsLayout>
);

export default EditDeleteCar;

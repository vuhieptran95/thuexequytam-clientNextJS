import ManageCarsLayout from "../../../shared/layouts/ManageCarsLayout";
import FormAddNew from "../../../shared/forms/FormAddNew";
const AddNewCar = () => (
  <ManageCarsLayout>
    <div className="container">
      <div className="row">
        <h3>This is add new car page</h3>
      </div>
      <div className="row">
        <FormAddNew />
      </div>
    </div>
  </ManageCarsLayout>
);

export default AddNewCar;

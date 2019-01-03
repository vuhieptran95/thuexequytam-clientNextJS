import ManageUILayout from "./../../../shared/layouts/ManageUILayout";
import { compose } from "recompose";
import { WithHomeUI, WithHomeUIHandlers, WithSelectedCarUI, WithDefaultType } from "../../../shared/HOCs/HomeUIHOCs";
import { HomeUILifeCycle } from "./../../../shared/HOCs/HomeUIHOCs";
import Link from "next/link";

const enhance = compose(
  WithHomeUI,
  WithSelectedCarUI,
  WithDefaultType,
  WithHomeUIHandlers,
  HomeUILifeCycle
);

const HomeUI = ({
  homeUI,
  defaultType,
  selectedCarUI,
  handleSelectCar,
  handleMoveLeft,
  handleMoveRight,
  handleMoveUp,
  handleMoveDown,
  handleSubmit
}) => (
  <ManageUILayout>
    <button className="btn btn-success mb-3" onClick={handleSubmit}>
      Lưu thay đổi
    </button>
    {homeUI.map(type => (
      <div className={selectedCarUI.typeId === type.id ? "border border-danger rounded img-thumbnail" : ""} key={type.id}>
        <button hidden={selectedCarUI.typeId === type.id ? false : true} className="btn btn-primary" href="" onClick={handleMoveUp}>
          UP
        </button>
        <h4 className="ml-2 mr-2 inline">{type.name}</h4>
        <button hidden={selectedCarUI.typeId === type.id ? false : true} className="btn btn-primary" href="" onClick={handleMoveDown}>
          DOWN
        </button>
        <div className="row mt-4">
          <div hidden={selectedCarUI.typeId === type.id ? false : true} className="col-lg-2 col-sm-4 col-6 mb-2 mt-3">
            <a href="" onClick={handleMoveLeft}>
              RIGHT
            </a>
          </div>
          {type.listCars.map(car => (
            <div key={car.id} className="col-lg-2 col-sm-4 col-6 mb-2">
              <input
                type="image"
                onClick={handleSelectCar}
                name={type.id}
                value={car.id}
                className={`img-fluid ${selectedCarUI.carId === car.id ? "border border-success img-thumbnail" : ""}`}
                src={car.thumbnail}
                alt=""
              />

              <Link prefetch href={`/admin/manage-cars/edit-delete-car?id=${car.id}`}>
                <a>
                  <h5>{car.name}</h5>
                </a>
              </Link>
            </div>
          ))}
          <div hidden={selectedCarUI.typeId === type.id ? false : true} className="col-lg-2 col-sm-4 col-6 mb-2 mt-3">
            <a href="" onClick={handleMoveRight}>
              LEFT
            </a>
          </div>
        </div>
      </div>
    ))}
    <div key={defaultType.id}>
      <h4 className="ml-2 mr-2 inline">{defaultType.name}</h4>
      <div className="row mt-4">
        {defaultType.listCars.map(car => (
          <div key={car.id} className="col-lg-2 col-sm-4 col-6 mb-2">
            <input
              type="image"
              onClick={handleSelectCar}
              name={defaultType.id}
              value={car.id}
              className={`img-fluid ${selectedCarUI.carId === car.id ? "border border-success img-thumbnail" : ""}`}
              src={car.thumbnail}
              alt=""
            />
            <Link prefetch href={`/admin/manage-cars/edit-delete-car?id=${car.id}`}>
              <a>
                <h5>{car.name}</h5>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </ManageUILayout>
);

export default enhance(HomeUI);

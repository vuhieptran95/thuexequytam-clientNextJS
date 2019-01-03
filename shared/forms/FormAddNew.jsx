import { compose } from "recompose";
import {
  WithMessage,
  WithBrands,
  WithFormHandlers,
  WithTypes,
  FormAddNewLifeCycle,
  WithImageSources,
  WithMainImage,
  WithIsImagesHidden
} from "./../HOCs/FormHOCs";
import Default from "./../../helper/Default";

const enhance = compose(
  WithBrands,
  WithTypes,
  WithMessage,
  WithMainImage,
  WithImageSources,
  WithIsImagesHidden,
  WithFormHandlers,
  FormAddNewLifeCycle
);

const FormAddNew = ({
  brands,
  mainImage,
  types,
  message,
  imgSrcs,
  isImagesHidden,
  handleSubmitAddNew,
  handleSelectImage,
  handleMoveRight,
  handleMoveLeft,
  handleImagesChange,
  handleRemoveImage,
  handleTextChange
}) => (
  <div className="row">
    <div className="col-lg-7">
      <div className="row">
        <div className="col-lg-12">
          <img className="max-width-100" src={mainImage} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-6 margin-top-10">
          <button hidden={isImagesHidden} onClick={handleMoveLeft}>
            Dịch Trái
          </button>
        </div>
        <div className="col-lg-6 col-6 margin-top-10 text-align-right">
          <button hidden={isImagesHidden} onClick={handleMoveRight}>
            {" "}
            Dịch Phải
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="flex-container2">
            {imgSrcs.map(src => (
              <div key={src.name} className="col-lg-6 relative margin-top-10 text-align-right no-padding-left">
                <input type="image" onClick={handleRemoveImage} value={src.url} className="absolute" src={Default.CloseImage} alt="Close" />
                <input type="image" onClick={handleSelectImage} src={src.url} className="max-width-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <input hidden={isImagesHidden} className="margin-top-10" type="file" onChange={handleImagesChange} multiple name="images" />
      <h4>{message}</h4>
    </div>

    <form id="addnew" className="col-lg-4" onSubmit={handleSubmitAddNew}>
      <div className="form-group">
        <div className="row">
          <label className="col-lg-4">Tên xe (*)</label>
          <input id="carId" onChange={handleTextChange} type="text" className="form-control col-lg-8" name="name" placeholder="Tên xe" required />
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <label className="col-lg-4">Loại xe (*)</label>
          <select id="typeId" name="type" onChange={handleTextChange} required className="form-control col-lg-8">
            <option value={null} />
            {types.map(type => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <label className="col-lg-4">Hãng xe (*)</label>
          <select id="brandId" onChange={handleTextChange} name="brand" required className="form-control col-lg-8">
            <option value={null} />
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Tạo mới
      </button>
    </form>
  </div>
);

export default enhance(FormAddNew);

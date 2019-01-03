import { withState, withHandlers, lifecycle } from "recompose";
import Db from "./../../config/FirebaseConfig";
import Axios from "axios";
import { Server } from "./../../config/ServerConfig";
import { ResizePromise } from "./../../helper/Resize";
import Validation from "./../../validation/FormValidation";
import Status from "../../helper/Status";
import Default from "../../helper/Default";
import MoveItem from "./../../helper/MoveItem";
import Convert from "../../helper/Convert";
import { WaitPromise } from "./../../helper/Wait";
import { EnableImages } from "./../../helper/EnableImages";

export const WithSelectedCar = withState("selectedCar", "updateSelectedCar", {});
export const WithBrands = withState("brands", "updateBrands", []);
export const WithTypes = withState("types", "updateTypes", []);
export const WithMessage = withState("message", "updateMessage", "");
export const WithMainImage = withState("mainImage", "updateMainImage", Default.MainImage);
export const WithImageSources = withState("imgSrcs", "updateImgSrcs", []);
export const WithIsImagesHidden = withState("isImagesHidden", "updateIsImagesHidden", true);
export const WithIsHidden = withState("isHidden", "updateIsHidden", true);
export const WithFormHandlers = withHandlers({
  handleSubmitAddNew: props => event => {
    event.preventDefault();
    var addnewForm = new FormData(document.getElementById("addnew"));
    addnewForm.append("images", Convert.ImageSrcsToImageUrls(props.imgSrcs));
    addnewForm.append("mainImage", props.mainImage);
    Axios.post(`${Server}cars`, addnewForm).then(console.log);
  },
  handleSubmitEdit: props => event => {
    event.preventDefault();
    var editDeleteForm = new FormData(document.getElementById("edit"));
    editDeleteForm.append("images", Convert.ImageSrcsToImageUrls(props.imgSrcs));
    editDeleteForm.append("mainImage", props.mainImage);
    Axios.put(`${Server}cars/${props.selectedCar.id}`, editDeleteForm).then(console.log);
  },
  handleSelectImage: props => event => {
    event.preventDefault();
    props.updateMainImage(event.target.src);
  },
  handleRemoveImage: props => event => {
    event.preventDefault();
    var removedImageUrl = event.target.value;
    if (props.mainImage === removedImageUrl) props.updateMainImage(Default.MainImage);
    var imagesArray = props.imgSrcs.filter(i => i.url !== removedImageUrl);
    props.updateImgSrcs(imagesArray);
  },
  handleMoveLeft: props => event => {
    var newImgSrcs = MoveItem.MoveItemLeft(props.imgSrcs, props.mainImage, "url");
    if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
  },

  handleMoveRight: props => event => {
    var newImgSrcs = MoveItem.MoveItemRight(props.imgSrcs, props.mainImage, "url");
    if (newImgSrcs) props.updateImgSrcs(newImgSrcs);
  },
  handleImagesChange: props => event => {
    try {
      var images = event.target.files;
      var currentNumberOfImgs = props.imgSrcs.length;
      var remainNumberofImgs = Default.MaxNumberOfImages - currentNumberOfImgs;
      var response = Validation.MaxImages(images, remainNumberofImgs);
      if (response !== Status.SUCCESS) {
        props.updateMessage(response);
        return;
      }
      if (images.length != 0) {
        response = Validation.ValidateImages(images);
        if (response !== Status.SUCCESS) {
          props.updateMessage(response);
          return;
        }
        var imagesForm = new FormData(document.getElementById("addnew") ? document.getElementById("addnew") : document.getElementById("edit"));
        var promiseArray = [];
        for (var i of images) {
          var promise = ResizePromise(i, 800);
          promiseArray.push(promise);
        }
        Promise.all(promiseArray).then(ress => {
          ress.forEach(res => imagesForm.append("images", res));
          Axios.post(`${Server}images`, imagesForm).then(res => {
            props.updateImgSrcs([...props.imgSrcs, ...res.data]);
          });
        });
      }
    } catch (error) {
      props.updateMessage(error);
    }
  },
  handleTextChange: props => event => {
    EnableImages(props.updateIsImagesHidden);
  },
  handleDeleteCar: props => event => {
    event.preventDefault();
    if (window.confirm("Muốn xóa thật không?")) {
      var carId = event.target.value;
      Db.collection("cars")
        .doc(carId)
        .delete()
        .then(() => {
          props.updateSelectedCar({});
          props.updateImgSrcs([]);
          props.updateMainImage(Default.MainImage);
        });
    }
  }
});

export const FormEditDeleteLifeCycle = lifecycle({
  componentDidMount() {
    if (this.props.router.query.id) {
      this.props.updateIsHidden(false);
      Db.collection("cars")
        .doc(this.props.router.query.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            var selectedCar = { id: doc.id, ...doc.data() };
            this.props.updateSelectedCar(selectedCar);
            var imgSrcs = selectedCar.images.map(i => {
              return { name: Math.random().toString(), url: i };
            });
            var mainImage = selectedCar.mainImage;
            this.props.updateImgSrcs(imgSrcs);
            this.props.updateMainImage(mainImage);
            EnableImages(this.props.updateIsImagesHidden);
          }
        });
      Db.collection("brands").onSnapshot(docs => {
        var brands = [];
        docs.forEach(doc => brands.push({ id: doc.id, ...doc.data() }));
        this.setState({ brands: brands });
        EnableImages(this.props.updateIsImagesHidden);
      });
      Db.collection("types").onSnapshot(docs => {
        var types = [];
        docs.forEach(doc => types.push({ id: doc.id, ...doc.data() }));
        this.setState({ types: types });
        EnableImages(this.props.updateIsImagesHidden);
      });
    }
  }
});

export const FormAddNewLifeCycle = lifecycle({
  componentDidMount() {
    Db.collection("brands").onSnapshot(docs => {
      var brands = [];
      docs.forEach(doc => brands.push({ id: doc.id, ...doc.data() }));
      this.setState({ brands: brands });
    });
    Db.collection("types").onSnapshot(docs => {
      var types = [];
      docs.forEach(doc => types.push({ id: doc.id, ...doc.data() }));
      this.setState({ types: types });
    });
  }
});

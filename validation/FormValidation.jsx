import Status from "./../helper/Status";
import Message from "../helper/Message";
function ValidateImages(images) {
  var errorMessage = "";
  for (var i of images) {
    if (i.type !== "image/jpeg") errorMessage += `${i.name}. `;
  }
  if (!errorMessage == "") {
    return errorMessage + "không phải là ảnh";
  }
  for (var k of images) {
    if (k.size > 8 * 1024 * 1024) errorMessage += `${k.name}. `;
  }
  if (!errorMessage == "") {
    return errorMessage + "vượt quá dung lượng 8 MB";
  }
  return Status.SUCCESS;
}

function MaxImages(images, max) {
  if (images.length > max) {
    return Message.MaxImages(max);
  }
  return Status.SUCCESS;
}

const Validation = { MaxImages: MaxImages, ValidateImages: ValidateImages };

export default Validation;

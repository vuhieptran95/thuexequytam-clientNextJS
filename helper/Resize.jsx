import Default from "./Default";
/**
 * Add two numbers.
 * @param {File} file
 * @param {number} width
 * @param {number} height
 * @param {Function} callbackFn
 */
export function Resize(file, width, height, callbackFn) {
  var img = document.createElement("img");
  var reader = new FileReader();
  reader.onload = function(e) {
    img.src = e.target.result;

    img.onload = function() {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(blob => callbackFn(blob), "image/jpeg");
    };
  };
  reader.readAsDataURL(file);
}

export function ResizePromise(file, width) {
  return new Promise((resolve, reject) => {
    var img = document.createElement("img");
    var reader = new FileReader();
    reader.onload = function(e) {
      img.onload = function() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var height = width / Default.ImageRatio;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(blob => resolve(blob), "image/jpeg");
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

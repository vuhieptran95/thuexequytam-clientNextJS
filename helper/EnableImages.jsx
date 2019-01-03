export const EnableImages = func => {
  var carIdValue = "";
  if (document.getElementById("carId").value) carIdValue = document.getElementById("carId").value;
  var typeIdValue = "";
  if (document.getElementById("typeId").value) typeIdValue = document.getElementById("typeId").value;
  var brandIdValue = "";
  if (document.getElementById("brandId").value) brandIdValue = document.getElementById("brandId").value;
  if (carIdValue == "" || typeIdValue == "" || brandIdValue == "") func(true);
  else func(false);
};

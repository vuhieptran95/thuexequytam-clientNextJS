export const UpdateRemoveArray = (array, data) => {
  var editedArray = array.filter(et => et != null);
  if (editedArray.includes(data)) {
    editedArray = editedArray.filter(et => et != data);
  } else {
    editedArray.push(data);
  }
  return editedArray;
};

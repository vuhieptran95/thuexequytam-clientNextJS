const MoveItemRight = (arrayOfItems, currentItemId, id) => {
  var array = arrayOfItems.filter(i => i !== null);
  var currentIndex = array.findIndex(i => i[id] === currentItemId);
  if (currentIndex < 0) return false;
  var nextIndex = currentIndex + 1;
  if (nextIndex < array.length) {
    var temp = array[currentIndex];
    array[currentIndex] = array[nextIndex];
    array[nextIndex] = temp;
    return array;
  }
  return false;
};

const MoveItemLeft = (arrayOfItems, currentItemId, id) => {
  var array = arrayOfItems.filter(i => i !== null);
  var currentIndex = array.findIndex(i => i[id] === currentItemId);
  if (currentIndex < 0) return false;
  var nextIndex = currentIndex - 1;
  if (nextIndex >= 0) {
    var temp = array[currentIndex];
    array[currentIndex] = array[nextIndex];
    array[nextIndex] = temp;
    return array;
  }
  return false;
};

const MoveItem = { MoveItemLeft: MoveItemLeft, MoveItemRight: MoveItemRight };
export default MoveItem;

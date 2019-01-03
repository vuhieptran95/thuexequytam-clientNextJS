const ImageSrcsToImageUrls = imageSrcs => {
  var imageUrls = [];
  imageSrcs.forEach(i => imageUrls.push(i.url));
  return imageUrls;
};

const ListCarsPromiseToListCars = async listCarsPromise => {
  var results = await Promise.all(listCarsPromise);
  var listCars = [];
  results.forEach(car => {
    listCars.push({ id: car.id, ...car.data() });
  });
  console.log(listCars);
  return listCars;
};

const Convert = {
  ImageSrcsToImageUrls: ImageSrcsToImageUrls,
  ListCarsPromiseToListCars: ListCarsPromiseToListCars
};

export default Convert;

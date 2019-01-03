const MaxImages = max => {
  return `Chỉ cho phép upload tối đa ${max} ảnh`;
};

const AltTextImage = (typeName, brandName, carName) => `Thuê xe ${typeName} ${brandName} ${carName} du lịch cưới hỏi đưa đón`;

export default { MaxImages: MaxImages, AltTextImage: AltTextImage };

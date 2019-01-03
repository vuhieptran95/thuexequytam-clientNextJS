export const IsMobile = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      return false;
    }
    return true;
  }
  return false;
};

import blankImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return blankImage;
  return url.replace("/media/", "/media/crop/600/400/");
};

export default getCroppedImageUrl;

import { FRAME } from './constants';

const getImageSrc = (images) => {
  if (images.length === 0) return '';
  let src = '';
  images.forEach((image) => {
    if (image.ImageTypeCode === FRAME) src = image.Url;
  });

  return src;
};

export default getImageSrc;

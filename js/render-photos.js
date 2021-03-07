import {createPhotos} from './create-photos.js'

const photosBlock = document.querySelector('.pictures');

const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photos = createPhotos();

const photosFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const photo = photoTemplate.cloneNode(true);
  photo.querySelector('.picture__img').src = url;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  photosFragment.appendChild(photo);
});

photosBlock.appendChild(photosFragment);

export {photosBlock, photos};

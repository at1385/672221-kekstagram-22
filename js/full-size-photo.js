import {body, isEscPress} from './util.js'
import {photosBlock, photos} from './render-photos.js'

const fullSizePhotoBlock = document.querySelector('.big-picture');
const fullSizePhotoImg = fullSizePhotoBlock.querySelector('.big-picture__img img');

const fullSizePhotoSocial = fullSizePhotoBlock.querySelector('.big-picture__social');
const fullSizePhotoCaption = fullSizePhotoSocial.querySelector('.social__caption');
const fullSizePhotoLikesCount = fullSizePhotoSocial.querySelector('.likes-count');
const fullSizePhotoCommentsCountBlock = fullSizePhotoSocial.querySelector('.social__comment-count');
const fullSizePhotoCommentsCount = fullSizePhotoCommentsCountBlock.querySelector('.comments-count');
const fullSizePhotoCommentBlock = fullSizePhotoSocial.querySelector('.social__comments');
const fullSizePhotoComment = fullSizePhotoCommentBlock.querySelector('.social__comment');
const fullSizePhotoCommentsLoader = fullSizePhotoSocial.querySelector('.comments-loader');


const fullSizePhotoCloseButton = fullSizePhotoBlock.querySelector('#picture-cancel');

const photoThumbnails = photosBlock.querySelectorAll('.picture');

const onPopupEscKeydown = (evt) => {
  if (isEscPress(evt)) {
    evt.preventDefault();
    closefullSizePhotoBlock();
  }
};

const onOverlayClick = (evt) => {
  if (evt.target === fullSizePhotoBlock) {
    closefullSizePhotoBlock();
  }
}

const openfullSizePhotoBlock = () => {
  fullSizePhotoBlock.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
  fullSizePhotoBlock.addEventListener('click', onOverlayClick);
};

const closefullSizePhotoBlock = () => {
  fullSizePhotoBlock.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
  fullSizePhotoBlock.removeEventListener('click', onOverlayClick);
};

const setFullSizePhotoData = (index) => {
  fullSizePhotoImg.src = photos[index].url;
  fullSizePhotoLikesCount.textContent = photos[index].likes;
  fullSizePhotoCommentsCount.textContent = photos[index].comments.length;

  const fragment = document.createDocumentFragment();

  photos[index].comments.forEach((element) => {
    const comment = fullSizePhotoComment.cloneNode(true);

    const commentPicture = comment.querySelector('.social__picture');

    commentPicture.src = element.avatar;
    commentPicture.alt = element.name;
    comment.querySelector('.social__text').textContent = element.message;

    fragment.appendChild(comment);
  });

  while (fullSizePhotoCommentBlock.firstChild) {
    fullSizePhotoCommentBlock.removeChild(fullSizePhotoCommentBlock.firstChild);
  }

  fullSizePhotoCommentBlock.appendChild(fragment);

  fullSizePhotoCaption.textContent = photos[index].description;
};

photoThumbnails.forEach((element, index) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    openfullSizePhotoBlock();

    fullSizePhotoCommentsCountBlock.classList.add('hidden');
    fullSizePhotoCommentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    setFullSizePhotoData(index);
  });
});

fullSizePhotoCloseButton.addEventListener('click', () => {
  closefullSizePhotoBlock();
});

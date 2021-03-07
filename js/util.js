const checkStringLength = (string, maxLength) => (string.length <= maxLength) ? true : false;

const body = document.querySelector('body');

const isEscPress = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export {checkStringLength, body, isEscPress};

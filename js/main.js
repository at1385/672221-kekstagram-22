'use strict'

const checkStringLength = (string, maxLength) => (string.length <= maxLength) ? true : false;

checkStringLength('12', 2);

// generating-mock-objects
const MAX_COUNT = 25;

const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;

const SENTENCE_MAX_COUNT = 2;
const SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USER_NAMES = ['Артём', 'Марина', 'Николай', 'Павел', 'Соня', 'Влад', 'Оля'];

let idPhotoCounter = 0;

const getRandomComment = (sentences, sentenceMaxCount, sentenceMinCount = 1) => {
  const sentenceCount = window._.random(sentenceMinCount, sentenceMaxCount);

  let comment = sentences[window._.random(sentences.length - 1)];

  for (let i = 1; i < sentenceCount; i++) {
    let sentence = '';

    do {
      sentence = sentences[window._.random(sentences.length - 1)];
    } while (sentence === comment);

    comment += ` ${sentence}`;
  }

  return comment;
}

const createComment = (idComment) => {
  return {
    id: +`${idPhotoCounter}${idComment}`,
    avatar: `img/avatar-${window._.random(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
    message: getRandomComment(SENTENCES, SENTENCE_MAX_COUNT),
    name: USER_NAMES[window._.random(USER_NAMES.length - 1)],
  }
}

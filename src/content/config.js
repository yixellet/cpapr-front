const BASE_URL_HOME = "http://localhost:4000";
const BASE_URL_WORK = "http://172.17.13.254/api/v1";
const NEWS_URL = "http://localhost:4000/news";
const DOCS_URL = "http://localhost:4000/docs";
const NEWS_PAGESIZE = 10;
const ERROR_MESSAGES = {
  EMPTY: 'Это обязательное поле',
  WRONG_LENGTH: 'Должно быть от 2 до 30 символов',
  WRONG_URL: 'Здесь должна быть ссылка',
  WRONG_EMAIL: 'Введите верный Email',
  SERVER_ERROR: 'На сервере произошла ошибка',
};

module.exports = {
  BASE_URL_HOME,
  BASE_URL_WORK,
  NEWS_URL,
  DOCS_URL,
  NEWS_PAGESIZE,
  ERROR_MESSAGES,
};

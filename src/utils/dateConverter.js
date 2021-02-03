function extractFullDate(dateString) {
  const date = new Date(dateString);
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  return (`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`);
}

export { extractFullDate };
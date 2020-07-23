export const intcomma = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}.${`0${monthIndex}`.slice(-2)}.${`0${day}`.slice(-2)}`;
};

export const formatDateTime = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  return `${year}.${monthIndex}.${`0${day}`.slice(
    -2,
  )} ${hour}:${`0${min}`.slice(-2)}`;
};

export const getDays = (d) => {
  var week = ['일', '월', '화', '수', '목', '금', '토'];
  var dayOfWeek = week[new Date(d).getDay()];
  return dayOfWeek;
};

export const MessageFormatTime = (d) => {
  const date = new Date(d);
  const hour = date.getHours();
  const min = date.getMinutes();

  if (hour > 12) {
    return `오후 ${hour - 12}:${min}`;
  }
  return `오전 ${hour}:${min}`;
};

export const getAge = (birth) => {
  const birthYear = new Date(birth).getFullYear();
  const currYear = new Date().getFullYear();

  return currYear - birthYear;
};

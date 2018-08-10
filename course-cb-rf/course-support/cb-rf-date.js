export const today = new Date();
export const yesterday = new Date(new Date().setDate(today.getDate() - 1));
const normolizeDate = day => (day > 9) ? day : `0${day}`;

export const dayReq = day => `?date_req=${normolizeDate(day.getDate())}/${normolizeDate(day.getMonth())}/${day.getFullYear()}`;
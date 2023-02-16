import movies from "./movies.js";

const checkBox = (rank, title) => (
  `<input type="checkbox" name="${title}" value="${title}">${title}</input>`
)

const makeMovieCheckBox = () => {
  const element = document.getElementById('movieCheckBox');
  element.innerHTML = movies.map((m) => checkBox(m.rank, m.title)).join('');
}

export const initCheckbox = () => {
  makeMovieCheckBox();
}
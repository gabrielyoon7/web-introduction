import movies from "./movies.js";

const checkBox = (rank, title) => (
  `<input type="checkbox" name="checkbox" value="${title}">${title}</input>`
)

const makeMovieCheckBox = () => {
  const element = document.getElementById('movieCheckBox');
  element.innerHTML = movies.map((m) => checkBox(m.rank, m.title)).join('');
}

const alertGuestCheck = () => {
  const name = document.getElementById('name');
  const selected = document.querySelectorAll('input[name="checkbox"]:checked')
  alert(`${name.value}님, 저와 ${selected.length}개의 취향이 같으시네요!`)
}

const addEventListenerToAlertGuestButton = () => {
  document.getElementById("alertGuestButton").addEventListener("click", () => {
    alertGuestCheck();
  });
}

const initAll = () => {
  const name = document.getElementById('name');
  name.value = ''
  const selected = document.querySelectorAll('input[name="checkbox"]:checked')
  selected.forEach(el => { el.checked = false })
}

const addEventListenerToCancelButton = () => {
  const element = document.getElementById("cancelButton").addEventListener("click", () => {
    initAll();
  });
}

export const initCheckbox = () => {
  makeMovieCheckBox();
  addEventListenerToAlertGuestButton();
  addEventListenerToCancelButton();
}
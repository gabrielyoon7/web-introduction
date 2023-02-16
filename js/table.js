import movies from "./movies.js";

const tableRow = (rank, title, poster, description, link) => (`
  <tr>
    <td>${rank}</td>
    <td>${title}</td>
    <td><img src='${poster}' style='width:100%' /></td>
    <td>${description}</td>
    <td><a href='${link}' target='_blank'>클릭</a></td>
  </tr>
`
)

const makeTable = () => {
  const element = document.getElementById('tbody');
  element.innerHTML = movies.map((m) => tableRow(m.rank, m.title, m.poster, m.description, m.link)).join('');
}

export const initTable = () => {
  makeTable();
}
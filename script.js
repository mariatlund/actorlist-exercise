// fetch("actors.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const jsonData = "actors.json";

fetch(jsonData)
  .then((response) => response.json())
  .then((data) => displayNames(data));

function displayNames(data) {
  console.log(data);
  data.forEach(showName);
}

function showName(actor) {
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".name").textContent = actor.fullname;

  document.querySelector("ul").appendChild(copy);
}

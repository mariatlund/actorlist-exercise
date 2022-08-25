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
  copy.querySelector(".popup-box").textContent = `${actor.movie}`;

  copy.querySelector(".name").addEventListener("click", PopUp);

  document.querySelector("ul").appendChild(copy);
}

function PopUp() {
  //   alert("test");
  console.log("popup");

  document.querySelector(".popup-box").classList.remove("hide");
}

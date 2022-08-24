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

// function showProduct(product) {
//     console.log(product);

//     //grab template
//     const template = document.querySelector("template").content;

//     //clone it
//     const myClone = template.cloneNode(true);

//     //change content
//     myClone
//       .querySelector(".imgLink")
//       .setAttribute("href", `productpage.html?id=${product._id}`)

//     //grab parent

//     const parent = document.querySelector("main");

//     //append it

//     parent.appendChild(myClone);
//   }

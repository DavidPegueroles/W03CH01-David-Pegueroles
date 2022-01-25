import ButtonComponent from "./components/ButtonComponent.js";
import CardComponent from "./components/CardComponent.js";
import Component from "./components/Component.js";
import ImageComponent from "./components/ImageComponent.js";
import personajes from "./personajes.js";

const body = document.querySelector("body");

const action = () => {
  console.log("aa");
};

for (const personaje of personajes) {
  const list = document.createElement("li");
  list.classList.add("character", "col");

  const liParentElement = document.querySelector(".characters-list");
  liParentElement.append(list);

  const image = new ImageComponent(
    body,
    `img/${personaje.nombre.toLowerCase()}.jpg`,
    `Picture of ${personaje.nombre.toLowerCase()} ${personaje.familia.toLowerCase()}`
  );
  const nameParent = document.querySelector(".card-body");

  const card = new CardComponent(
    "div",
    list,
    image,
    `${personaje.nombre}`,
    `${personaje.familia}`,
    `${personaje.edad}`
  );
}

// const image = new ImageComponent(parentElement, "img/jaime.jpg", "jaime es");
// const dedAf = new ButtonComponent(parentElement, "DED AF", action());

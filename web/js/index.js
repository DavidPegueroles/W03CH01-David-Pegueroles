import ButtonComponent from "./components/ButtonComponent.js";
import CardComponent from "./components/CardComponent.js";
import Component from "./components/Component.js";
import ImageComponent from "./components/ImageComponent.js";

const liParentElement = document.querySelector(".characters-list");
const cardParent = document.querySelector(".character");

const action = () => {
  console.log("aa");
};

const li = new Component(liParentElement, "li");
const card = new CardComponent(cardParent, "div");

const image = new ImageComponent(parentElement, "img/jaime.jpg", "jaime es");
const dedAf = new ButtonComponent(parentElement, "DED AF", action());

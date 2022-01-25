import Component from "./components/Component.js";
import ImageComponent from "./components/ImageComponent.js";

const parentElement = document.querySelector("body");

const abersifunciona = new ImageComponent(
  parentElement,
  "img/jaime.jpg",
  "jaime es"
);

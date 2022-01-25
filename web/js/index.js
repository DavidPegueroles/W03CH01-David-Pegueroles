import ButtonComponent from "./components/ButtonComponent.js";
import Component from "./components/Component.js";
import ImageComponent from "./components/ImageComponent.js";

const parentElement = document.querySelector("body");

const image = new ImageComponent(parentElement, "img/jaime.jpg", "jaime es");

const action = () => {
  console.log("aa");
};

const dedAf = new ButtonComponent(parentElement, "DED AF", action());

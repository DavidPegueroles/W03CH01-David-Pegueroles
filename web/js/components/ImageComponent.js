import Component from "./Component.js";

class ImageComponent extends Component {
  constructor(
    parentElement,
    src,
    altText,
    className = "character__picture card-img-top"
  ) {
    super(parentElement, "img");
    this.element.src = src;
    this.element.alt = altText;
    this.element.className = className;
  }
}

export default ImageComponent;

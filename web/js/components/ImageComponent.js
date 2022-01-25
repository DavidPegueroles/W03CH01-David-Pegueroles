import Component from "./Component";

class ImageComponent extends Component {

constructor(parentElement, src, alt, className = "character__picture card-img-top") {
    super(parentElement, "img") {
      this.element.src = src;
      this.element.alt = alt;
      this.element.className = className;
    }
  }
}

export default ImageComponent;

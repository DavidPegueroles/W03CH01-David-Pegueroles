class Component {
  element;

  constructor(parentElement, HTMLTag) {
    this.element = document.createElement(HTMLTag);

    if (HTMLTag === "img") {
      parentElement.append(this.element);
    } else {
      parentElement.append(this.element);
    }
  }
}

export default Component;

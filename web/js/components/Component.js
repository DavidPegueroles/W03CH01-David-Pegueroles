class Component {
  element;

  constructor(parentElement, HTMLTag) {
    this.element = document.createElement(HTMLTag);

    parentElement.append(this.element);
  }
}

export default Component;

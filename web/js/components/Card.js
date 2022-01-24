class Card {
  element;

  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;

    parentElement.append(this.element);

    this.contentHTML();
  }

  contentHTML() {
    this.element.innerHTML = ``;
  }
}

export default Card;

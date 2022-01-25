class Card {
  element;

  constructor(parentElement, className, htmlTag, imageSource) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;

    parentElement.append(this.element);

    this.createDiv();
    this.image(imageSource);
  }

  createDiv() {
    this.div = document.createElement("div");
    this.div.classList = "card character__card";

    this.element.append(this.div);
  }

  image(imageSource) {
    this.img = document.createElement("img");
    this.img.classList = "character__picture card-img-top";
    this.img.src = "img/daenerys.jpg";
    this.img.alt = "Nombre y familia del personaje";

    this.div.append(this.img);
  }
}

export default Card;

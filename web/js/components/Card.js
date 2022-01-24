class Card {
  element;

  constructor(parentElement, className, htmlTag, imageSource) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;

    parentElement.append(this.element);

    this.createDiv();
    this.image(imageSource);
    this.divInside();
  }

  createDiv() {
    this.div = document.createElement("div");
    this.div.classList = "card character__card";

    this.element.append(this.div);
  }

  image(imageSource) {
    this.img = document.createElement("img");
    this.img.classList = "character__picture card-img-top";
    this.img.src = imageSource;
    this.img.alt = "Nombre y familia del personaje";

    this.div.append(this.img);
  }

  divInside() {
    this.divBody = document.createElement("div");
    this.divBody.classList = "card-body";

    this.element.append(this.divBody);
  }
}

export default Card;

import Component from "./Component.js";

class CardComponent extends Component {
  constructor(HTMLTag, parentElement, image, personajeName, family, edad) {
    super(parentElement, HTMLTag);
    this.element.className = "card character__card";

    this.generateHTML(personajeName, family, edad);

    this.element.prepend(image.element);
  }

  generateHTML(personajeName, family, edad) {
    this.element.innerHTML = ` 
            <div class="card-body">
              <h2 class="character__name card-title h4">${personajeName} ${family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  
                </div>
              </div>
            </div>
            <i class="emoji"></i>`;
  }
}

export default CardComponent;

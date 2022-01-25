class ReyCard {
  element;

  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;

    parentElement.append(this.element);

    this.contentHTML();
  }

  contentHTML() {
    this.element.innerHTML = `
          <div class="card character__card">
            <img
              src="img/joffrey.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">Joffrey Baratheon</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: 16 años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: 2</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji">👑</i>
          </div>`;
  }
}

export default ReyCard;

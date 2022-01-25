import Component from "./Component.js";

class ButtonComponent extends Component {
  action;

  constructor(
    parentElement,
    text,
    action,
    className = "character__action btn"
  ) {
    super(parentElement, "button");

    this.element.className = className;

    this.action = action;

    this.generateHTML(text);

    this.addListeners();
  }

  generateHTML(text) {
    this.element.textContent = text;
  }

  addListeners() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;

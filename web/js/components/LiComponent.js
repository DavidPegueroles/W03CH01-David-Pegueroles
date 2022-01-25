import Component from "./Component.js";

class LiComponent extends Component {
  constructor(parentElement, className = "character col") {
    super(parentElement, "li");
    this.parentElement.className = className;
  }
}

export default LiComponent;

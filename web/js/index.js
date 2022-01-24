import Card from "./components/Card.js";
import ReyCard from "./components/ReyCard.js";

const pare = document.querySelector(".characters-list");

const characterCard = new ReyCard(pare, "character col", "li");
const newLuchador = new Card(pare, "character col", "li", "img/daenerys.jpg");

import { bronn, daenerys, jaime, joffrey, tyrion } from ".";

import Asesor from "./personajes/Asesor.js";
import Escudero from "./personajes/Escudero.js";
import Luchador from "./personajes/Luchador.js";
import Rey from "./personajes/Rey.js";

export const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
export const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
export const daenerys = new Luchador(
  "Daenerys",
  "Targaryen",
  30,
  "Dragones",
  10
);
export const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
export const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

export default personajes;

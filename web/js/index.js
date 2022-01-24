import Asesor from "./personajes/Asesor";
import Escudero from "./personajes/Escudero";
import Luchador from "./personajes/Luchador";
import Rey from "./personajes/Rey";

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
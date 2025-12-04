import { RickAndMortyService } from "../service/RickAndMortyService";
import Handlebars from "handlebars";
import charCardsSource from "bundle-text:../../template/characterCard.hbs";

const charCardsTemp = Handlebars.compile(charCardsSource);
const charCardsList = document.querySelector("[data-character-list]");

export const CharacterCards = async () => {
  if (location.pathname === "/") return;
  const { results } = await RickAndMortyService.getAllCharacters();
  const charCardsHTML = charCardsTemp(results);
  charCardsList.insertAdjacentHTML("beforeend", charCardsHTML);
};

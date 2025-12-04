import { RickAndMortyService } from "../service/RickAndMortyService";
import Handlebars from "handlebars";
import charCardsSource from "bundle-text:../../template/characterCard.hbs";

const charCardsTemp = Handlebars.compile(charCardsSource);
const charCardsList = document.querySelector("[data-character-list]");

let page = 0;
let maxPage = 1;

export const CharacterCards = async () => {
  if (location.pathname === "/") return;
  if (maxPage >= page) {
    const { info, results } = await RickAndMortyService.getAllCharacters({
      page: page,
    });
    maxPage = info.pages;

    const charCardsHTML = charCardsTemp(results);
    charCardsList.insertAdjacentHTML("beforeend", charCardsHTML);
    page++;
  }
};

import { RickAndMortyService } from "../service/RickAndMortyService";
import Handlebars from "handlebars";
import charCardsSource from "bundle-text:../../template/characterCard.hbs";

const charCardsTemp = Handlebars.compile(charCardsSource);
const charCardsList = document.querySelector("[data-character-list]");

export const CharacterCards = async (refreshContainer = false) => {
  const filters = JSON.parse(localStorage.getItem("filtersData"));

  let currPage = filters.page;
  let totalPages = filters.totalPages;

  if (refreshContainer) charCardsList.innerHTML = "";

  if (location.pathname === "/") return;

  if (totalPages >= currPage) {
    const { info, results } = await RickAndMortyService.getAllCharacters(
      filters
    );

    filters.totalPages = info.pages;

    const charCardsHTML = charCardsTemp(results);
    charCardsList.insertAdjacentHTML("beforeend", charCardsHTML);

    currPage++;
    filters.page = currPage;

    localStorage.setItem("filtersData", JSON.stringify(filters));
  }
};

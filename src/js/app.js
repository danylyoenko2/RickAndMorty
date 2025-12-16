import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";
import { createHeaderMarkUp } from "./components/header";
import { customSelect } from "./components/customSelect";
import { initEpisodes } from "./components/episodesController";

const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname === "/") {
    Scroll();
    createHeaderMarkUp();
    return;
  }

  createHeaderMarkUp(false);

  customSelect();
  initEpisodes();

  if (LoadMoreBtn) {
    CharacterCards();
    LoadMoreBtn.addEventListener("click", CharacterCards);
  }
});

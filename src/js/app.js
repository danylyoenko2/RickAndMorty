import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";
import { createHeaderMarkUp } from "./components/header";
import { Filter } from "./components/СustomSelect";
import { handleChange } from "./logic/filterLogic";
import { RickAndMortyService } from "./service/RickAndMortyService";
import { FilterEpisodes } from "./components/filterEpisodes";
import { EpisodCards } from "./components/episodeRender";
import "./components/mainCgharactersChange";

const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

localStorage.setItem(
  "filtersData",
  JSON.stringify({
    page: 1,
    totalPages: 1,
    status: "",
    species: "",
    type: "",
    gender: "",
  })
);

const handleLoadMore = () => CharacterCards();

document.addEventListener("DOMContentLoaded", () => {
  if (
    location.pathname === "/" ||
    location.pathname === "/RickAndMorty/" ||
    location.pathname === "/index.html" ||
    location.pathname === "/RickAndMorty/index.html"
  ) {
    Scroll();
    createHeaderMarkUp();
  } else if (
    location.pathname === "/characters.html" ||
    location.pathname === "/RickAndMorty/characters.html"
  ) {
    createHeaderMarkUp(false);
    CharacterCards({ page: 1 });

    Filter();
    LoadMoreBtn.addEventListener("click", handleLoadMore);
    document.addEventListener("keypress", handleChange);
  } else if (
    location.pathname === "/episodes.html" ||
    location.pathname === "/RickAndMorty/episodes.html"
  ) {
    createHeaderMarkUp(false);
    FilterEpisodes();
    EpisodCards();
    document.addEventListener("keypress", handleChange);
  }
});

import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";
import { createHeaderMarkUp } from "./components/header";
import { Filter } from "./components/СustomSelect";
import "./logic/filterLogic";

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
  if (location.pathname === "/") {
    Scroll();
    createHeaderMarkUp();
  } else {
    createHeaderMarkUp(false);
    CharacterCards({ page: 1 });
    Filter();
    LoadMoreBtn.addEventListener("click", handleLoadMore);
  }
});

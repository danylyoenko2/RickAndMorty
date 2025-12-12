import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";
import { createHeaderMarkUp } from "./components/header";

const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname === "/") {
    Scroll();
    createHeaderMarkUp();
  } else {
    createHeaderMarkUp(false);
    CharacterCards();
    LoadMoreBtn.addEventListener("click", CharacterCards);
  }
});

import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";

const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

document.addEventListener("DOMContentLoaded", () => {
  if (location.pathname === "/") {
    Scroll();
  } else {
    CharacterCards();
    LoadMoreBtn.addEventListener("click", CharacterCards);
  }
});

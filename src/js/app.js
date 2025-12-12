import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";

const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

LoadMoreBtn.addEventListener("click", CharacterCards());

CharacterCards();
Scroll();

import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";

const LoadMoreBtn = document.querySelector("[data-button-load]");

LoadMoreBtn.addEventListener("click", CharacterCards());

CharacterCards();
Scroll();

import { CharacterCards } from "./components/CharacterCards";
import { Scroll } from "./components/scroll";
import { createHeaderMarkUp } from "./components/header";
import Handlebars from "handlebars";
import headerHbs from "bundle-text:../template/headerBtn.hbs";
import { initSearch } from "./components/search";

document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.querySelector("[data-header]");

  headerContainer.innerHTML = Handlebars.compile(headerHbs)({});

  initSearch();
});
const LoadMoreBtn = document.querySelector("[data-loadMoreBtn]");

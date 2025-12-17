import Handlebars from "handlebars";
import searchResultsHbs from "bundle-text:../../template/searchResults.hbs";
import { RickAndMortyService } from "../service/RickAndMortyService";

export function initSearch() {
  const openBtn = document.querySelector("[data-open-search]");
  const closeBtn = document.querySelector("[data-close-search]");
  const sideMenu = document.querySelector("[data-side-menu]");
  const backdrop = document.querySelector("[data-backdrop]");
  const input = document.querySelector("[data-header-search]");
  const resultsContainer = document.querySelector("[data-search-result]");

  if (
    !openBtn ||
    !closeBtn ||
    !sideMenu ||
    !backdrop ||
    !input ||
    !resultsContainer
  ) {
    console.error("Не знайдено елементи меню або інпуту");
    return;
  }

  function openMenu() {
    sideMenu.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("no-scroll");
    input.focus();
  }

  function closeMenu() {
    sideMenu.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  let timer;
  input.addEventListener("input", (e) => {
    clearTimeout(timer);
    const query = e.target.value.trim();
    if (!query) {
      resultsContainer.innerHTML = "";
      return;
    }
    timer = setTimeout(() => searchCharacters(query), 400);
  });

  async function searchCharacters(query) {
    try {
      const data = await RickAndMortyService.getAllCharacters({ name: query });
      const results = data.results || [];
      resultsContainer.innerHTML = results
        .map(
          (c) => `
        <div class="character-card">
          <img src="${c.image}" alt="${c.name}" />
          <div class="character-info">
            <div class="name">${c.name}</div>
            <div class="status">Status: ${c.status}</div>
            <div class="species">Species: ${c.species}</div>
            <div class="gender">Gender: ${c.gender}</div>
          </div>
        </div>
      `
        )
        .join("");
    } catch {
      resultsContainer.innerHTML = "<div>No results found</div>";
    }
  }
}

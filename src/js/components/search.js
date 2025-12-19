import Handlebars from 'handlebars';
import searchResultsHbs from 'bundle-text:../../template/searchResults.hbs';
import { RickAndMortyService } from '../service/RickAndMortyService';
import Handlebars from 'handlebars';
import searchResultsHbs from 'bundle-text:../../template/searchResults.hbs';

export function initSearch() {
  const openBtn = document.querySelector('[data-open-search]');
  const closeBtn = document.querySelector('[data-close-search]');
  const sideMenu = document.querySelector('[data-side-menu]');
  const backdrop = document.querySelector('[data-backdrop]');
  const input = document.querySelector('[data-header-search]');
  const resultsContainer = document.querySelector('[data-search-result]');

  if (
    !openBtn ||
    !closeBtn ||
    !sideMenu ||
    !backdrop ||
    !input ||
    !resultsContainer
  ) {
    console.error('Не знайдено елементи меню або інпуту');
    return;
  }

  function openMenu() {
    sideMenu.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('no-scroll');
    input.focus();
  }

  function closeMenu() {
    sideMenu.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();

    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    searchCharacters(query);
  });

  let lastQuery = '';

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();

    if (query === lastQuery) return;
    lastQuery = query;

    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    searchCharacters(query);
  });

  const template = Handlebars.compile(searchResultsHbs);

  async function searchCharacters(query) {
    try {
      const data = await RickAndMortyService.getAllCharacters({ name: query });
      const results = data.results || [];

      if (!results.length) {
        resultsContainer.innerHTML = `<div style="color: red;">No results found</div>`;
        return;
      }

      resultsContainer.innerHTML = template({ results });
    } catch (error) {
      resultsContainer.innerHTML = `<div style="color: red;">No results found</div>`;
    }
  }
}

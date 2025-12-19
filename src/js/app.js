import { CharacterCards } from './components/CharacterCards';
import { Scroll } from './components/scroll';
import { createHeaderMarkUp } from './components/header';
import { Filter } from './components/СustomSelect';
import { handleChange, handleChangeEpisode } from './logic/filterLogic';
import { FilterEpisodes } from './components/filterEpisodes';
import { EpisodCards } from './components/episodeRender';
import {
  handleOpenModalChars,
  handleOpenModalEpisode,
} from './logic/modalLogic';
import './components/mainCgharactersChange';

const LoadMoreBtn = document.querySelector('[data-loadMoreBtn]');
const charCardsList = document.querySelector('[data-character-list]');
const episCardsList = document.querySelector('[data-episode]');
const filterFormCharacters = document.querySelector('[data-filter-form]');
const filterFormEpisodes = document.querySelector('[data-filter-episodes]');

localStorage.setItem(
  'filtersData',
  JSON.stringify({
    page: 1,
    totalPages: 1,
    status: '',
    species: '',
    type: '',
    gender: '',
  }),
);

localStorage.setItem(
  'filtersDataEpisode',
  JSON.stringify({
    page: 1,
    totalPages: 1,
    name: '',
    episode: '',
  }),
);
const handleLoadMoreChars = () => CharacterCards();
const handleLoadMoreEpis = () => EpisodCards();

document.addEventListener('DOMContentLoaded', () => {
  if (
    location.pathname === '/' ||
    location.pathname === '/RickAndMorty/' ||
    location.pathname === '/index.html' ||
    location.pathname === '/RickAndMorty/index.html'
  ) {
    Scroll();
    createHeaderMarkUp();
  } else if (
    location.pathname === '/characters.html' ||
    location.pathname === '/RickAndMorty/characters.html'
  ) {
    createHeaderMarkUp(false);
    CharacterCards({ page: 1 });
    Filter();

    const selects = filterFormCharacters.querySelectorAll(
      'input[type="hidden"]',
    );

    LoadMoreBtn.addEventListener('click', handleLoadMoreChars);
    charCardsList.addEventListener('click', handleOpenModalChars);
    selects.forEach((input) => input.addEventListener('change', handleChange));
    filterFormCharacters.addEventListener('submit', handleChange);
  } else if (
    location.pathname === '/episodes.html' ||
    location.pathname === '/RickAndMorty/episodes.html'
  ) {
    createHeaderMarkUp(false);
    FilterEpisodes();
    EpisodCards();

    episCardsList.addEventListener('click', handleOpenModalEpisode);
    filterFormEpisodes.addEventListener('submit', handleChangeEpisode);
    filterFormEpisodes.addEventListener('change', handleChangeEpisode);
    LoadMoreBtn.addEventListener('click', handleLoadMoreEpis);
  }
});

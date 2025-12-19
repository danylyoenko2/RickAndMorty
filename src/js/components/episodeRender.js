import { RickAndMortyService } from '../service/RickAndMortyService';
import Handlebars from 'handlebars';
import episodSource from 'bundle-text:../../template/episode.hbs';
import { SearchError } from './searchError';

const renderEpisod = document.querySelector('[data-episode]');
const episodRender = Handlebars.compile(episodSource);

export const EpisodCards = async (refreshContainer = false) => {
  const filters = JSON.parse(localStorage.getItem('filtersDataEpisode'));
  let currPage = filters.page;
  let totalPages = filters.totalPages;

  if (refreshContainer) renderEpisod.innerHTML = '';

  if (location.pathname === '/') return;

  if (filters.episode || totalPages >= currPage) {
    try {
      let resultsForRender = [];

      if (filters.episode) {
        const data = await RickAndMortyService.getAllEpisodeById(
          filters.episode,
        );

        resultsForRender = Array.isArray(data) ? data : [data];

        filters.totalPages = 1;
        filters.page = 1;
      } else {
        const { info, results } =
          await RickAndMortyService.getAllEpisodes(filters);

        resultsForRender = results;
        filters.totalPages = info.pages;

        currPage++;
        filters.page = currPage;
      }

      const episCardsHTML = episodRender(resultsForRender);
      renderEpisod.insertAdjacentHTML('beforeend', episCardsHTML);

      localStorage.setItem('filtersDataEpisode', JSON.stringify(filters));
    } catch (error) {
      SearchError(renderEpisod);
    }
  }
};

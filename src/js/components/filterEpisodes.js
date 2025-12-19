import Handlebars from 'handlebars';
import FilterEpisodesSource from 'bundle-text:../../template/filterEpisodes.hbs';
import { RickAndMortyService } from '../service/RickAndMortyService';
import { selectLogic } from './СustomSelect';
import { filterDataEpisodes } from '../helpers/filterHelpers';

const episodesForm = document.querySelector('[data-filter-episodes]');

const filterEpisodesTemp = Handlebars.compile(FilterEpisodesSource);

export const FilterEpisodes = async () => {
  const { info, results } = await RickAndMortyService.getAllEpisodes();
  const episodeIds = Array.from({ length: info.count }, (_, i) => i + 1);
  const allEpisodes = await RickAndMortyService.getAllEpisodeById(episodeIds);
  allEpisodes.map((item) => {
    const episodeString = item.episode;

    const regex = /S(\d+)E(\d+)/i;

    const match = episodeString.match(regex);

    if (match) {
      const season = parseInt(match[1], 10);
      const episode = parseInt(match[2], 10);

      switch (season) {
        case 1:
          filterDataEpisodes[0].series.push(episode);
          break;
        case 2:
          filterDataEpisodes[1].series.push(episode);
          break;
        case 3:
          filterDataEpisodes[2].series.push(episode);
          break;
        case 4:
          filterDataEpisodes[3].series.push(episode);
          break;

        case 5:
          filterDataEpisodes[4].series.push(episode);
          break;
      }
    }
  });

  const filterEpisodesHTML = filterEpisodesTemp(filterDataEpisodes);
  episodesForm.insertAdjacentHTML('beforeend', filterEpisodesHTML);
  selectLogic();
};

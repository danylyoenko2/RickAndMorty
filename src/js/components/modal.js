import Handlebars from 'handlebars';
import ModalSource from 'bundle-text:../../template/modal.hbs';
import { RickAndMortyService } from '../service/RickAndMortyService';
import { initModalLogic } from '../logic/modalLogic';

const container = document.body;

const ModalTemp = Handlebars.compile(ModalSource);

const procEpisodeNums = (episodeUrls) =>
  episodeUrls.map((url) => url.split('/').pop());

export const Modal = async (id) => {
  const rawData = await RickAndMortyService.getCharacterById(id);
  const ep = procEpisodeNums(rawData.episode);
  let episodes = await RickAndMortyService.getAllEpisodeById(ep);

  if (!Array.isArray(episodes)) episodes = [episodes];
  const data = {
    characterData: rawData,
    episodeData: episodes,
  };
  console.log(data);
  container.classList.add('no-scroll');
  const ModalHTML = ModalTemp(data);
  container.insertAdjacentHTML('afterbegin', ModalHTML);
  initModalLogic();
};

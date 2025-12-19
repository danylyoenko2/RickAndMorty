import Handlebars from 'handlebars';
import ModalSource from 'bundle-text:../../template/modalEpisodes.hbs';
import { RickAndMortyService } from '../service/RickAndMortyService';
import { initModalLogic } from '../logic/modalLogic';

const container = document.body;

const ModalTemp = Handlebars.compile(ModalSource);

const procEpisodeNums = (charUrls) =>
  charUrls.map((url) => url.split('/').pop());

export const ModalEpisodes = async (id) => {
  const rawData = await RickAndMortyService.getAllEpisodeById(id);
  console.log(rawData);
  const ch = procEpisodeNums(rawData.characters);
  let characters = await RickAndMortyService.getCharacterById(ch);

  if (!Array.isArray(characters)) characters = [characters];
  const data = {
    characterData: characters,
    episodeData: rawData,
  };
  console.log(data);
  container.classList.add('no-scroll');
  const ModalHTML = ModalTemp(data);
  container.insertAdjacentHTML('afterbegin', ModalHTML);
  initModalLogic();
};

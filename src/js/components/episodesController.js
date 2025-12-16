import Handlebars from "handlebars";
import episodesTemplateSource from "bundle-text:../../template/episodes.hbs";
import { RickAndMortyService } from "../service/RickAndMortyService";

const root = document.querySelector("#episodes-root");
const seasonInput = document.querySelector('[name="seasonFilter"]');

const template = Handlebars.compile(episodesTemplateSource);

let allEpisodesCache = [];

const parseEpisodeCode = (code) => {
  const match = code.match(/S(\d{2})E(\d{2})/);
  if (!match) return null;

  return {
    season: match[1],
    episode: match[2],
  };
};

const renderEpisodes = (episodes) => {
  root.innerHTML = template({ episodes });
};

const loadAllEpisodes = async () => {
  let page = 1;
  let result = [];

  while (true) {
    const data = await RickAndMortyService.getAllEpisodes({ page });
    result = result.concat(data.results);
    if (!data.info.next) break;
    page++;
  }

  allEpisodesCache = result;
  renderEpisodes(allEpisodesCache);
};

const filterBySeason = (season) => {
  if (season === "all" || !season) {
    renderEpisodes(allEpisodesCache);
    return;
  }

  const seasonCode = season.padStart(2, "0");

  const filtered = allEpisodesCache.filter((ep) => {
    const parsed = parseEpisodeCode(ep.episode);
    return parsed?.season === seasonCode;
  });

  renderEpisodes(filtered);
};

export const initEpisodes = async () => {
  await loadAllEpisodes();

  seasonInput.addEventListener("change", (e) => {
    filterBySeason(e.target.value);
  });
};

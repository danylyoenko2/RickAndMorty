import { RickAndMortyService } from "../service/RickAndMortyService";
import Handlebars from "handlebars";
import episodSource from "bundle-text:../../template/episode.hbs";

const renderEpisod = document.querySelector("[data-episode]");
const episodRender = Handlebars.compile(episodSource);

let page = 1;
let maxPage = 1;

export const EpisodCards = async () => {
  if (location.pathname === "/") return;

  if (maxPage >= page) {
    const { info, results } = await RickAndMortyService.getAllEpisodes({
      page: page,
    });

    maxPage = info.pages;
    console.log(page, maxPage);
    const episodHTML = episodRender(results);
    renderEpisod.innerHTML = episodHTML;
  }
};

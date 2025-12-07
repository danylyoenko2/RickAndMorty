import Handlebars from "handlebars";
import scrollSource from "bundle-text:../../template/scroll.hbs";
import { RickAndMortyService } from "../service/RickAndMortyService";

const scrollContainer = document.querySelector("[data-scroll]");
const scrollTemp = Handlebars.compile(scrollSource);

export const Scroll = async () => {
  const data = await RickAndMortyService.getAllCharacters({ page: 2 });
  const scrollHTML = scrollTemp(data.results);
  scrollContainer.innerHTML = scrollHTML;
};

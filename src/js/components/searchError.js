import Handlebars from "handlebars";
import errorSearch from "bundle-text:../../template/searchError.hbs";

const errorTemplate = Handlebars.compile(errorSearch);

export const SearchError = (container) => {
  const errorHTML = errorTemplate();
  console.log(container);
  container.innerHTML = errorHTML;
};

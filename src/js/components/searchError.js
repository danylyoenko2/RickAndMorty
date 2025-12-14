import Handlebars from "handlebars";
import errorSearch from "bundle-text:../../template/searchError.hbs";

const errorContainer = document.querySelector("[data-error]");

const errorTemplate = Handlebars.compile(errorSearch);

export const renderSearchError = () => {
  const errorHTML = errorTemplate();
  errorContainer.innerHTML = errorHTML;
};

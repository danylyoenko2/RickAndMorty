import Handlebars from "handlebars";
import headerBtnSource from "bundle-text:../template/headerBtn.hbs";
import headerLogoSource from "bundle-text:../template/headerLogo.hbs";

const headerBtnTemp = Handlebars.compile(headerBtnSource);
const headerLogoTemp = Handlebars.compile(headerLogoSource);
const headerContainer = document.querySelector("[data-header]");

export const createHeaderMarkUp = (showBtns) => {
  if (!headerContainer) retunr;

  const headerHtml = showBtns ? headerBtnTemp({}) : headerLogoTemp({});

  headerContainer.innerHTML = headerHtml;
};

import Handlebars from "handlebars";
import filterSource from "bundle-text:../../template/filter.hbs";
import { filterData } from "../helpers/filterHelpers";

const filterTemp = Handlebars.compile(filterSource);

export const selectLogic = () => {
  const selects = document.querySelectorAll("[data-select]");
  selects.forEach((select) => {
    const selectTrigger = select.querySelector("[data-select-trigger]");
    const selectText = select.querySelector("[data-select-text]");
    const selectOptions = select.querySelectorAll(".filter-form__option");
    const selectInput = document.querySelector([
      `[name="${select.dataset.name}Filter"]`,
    ]);

    selectTrigger.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll("[data-select]").forEach((s) => {
        if (s !== select) s.classList.remove("is-open");
      });

      select.classList.toggle("is-open");
    });

    selectOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.dataset.value;
        selectText.textContent = value;
        selectInput.value = value;

        selectOptions.forEach((opt) => opt.classList.remove("selected"));

        option.classList.add("selected");
        select.classList.remove("is-open");
      });
    });
  });

  document.addEventListener("click", () => {
    selects.forEach((s) => s.classList.remove("is-open"));
  });
};

export const Filter = () => {
  const filterForm = document.querySelector("[data-filter-form]");
  const filterHTML = filterTemp(filterData);

  filterForm.innerHTML = filterHTML;
  selectLogic();
};

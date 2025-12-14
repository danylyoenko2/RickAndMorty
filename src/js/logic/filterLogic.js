import { CharacterCards } from "../components/CharacterCards";

const filterForm = document.querySelector("[data-filter-form]");

let filtersData = JSON.parse(localStorage.getItem("filtersData"));

const procValue = (value) => {
  if (value === "none") {
    return "";
  }
  return value;
};

const handleChange = (e) => {
  e.preventDefault();
  if (e.key !== "Enter") return;
  const updatedFilterData = {
    page: 1,
    totalPages: 1,
    name: filterForm.nameFilter.value.toLowerCase(),
    status: procValue(filterForm.statusFilter.value.toLowerCase()),
    species: procValue(filterForm.speciesFilter.value.toLowerCase()),
    type: procValue(filterForm.typeFilter.value.toLowerCase()),
    gender: procValue(filterForm.genderFilter.value.toLowerCase()),
  };

  filtersData = updatedFilterData;

  localStorage.setItem("filtersData", JSON.stringify(filtersData));
  CharacterCards(e, true);
};

document.addEventListener("keypress", handleChange);

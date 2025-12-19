import { CharacterCards } from '../components/CharacterCards';
import { EpisodCards } from '../components/episodeRender';

const filterForm = document.querySelector('[data-filter-form]');

const procValue = (value) => {
  if (value === 'none' || value === 'All season') {
    return '';
  }
  return value.trim();
};

export const handleChange = (e) => {
  console.log(e.target);
  if (e.type === 'submit') {
    e.preventDefault();
  }

  const updatedFilterData = {
    page: 1,
    totalPages: 1,
    name: filterForm.nameFilter?.value.toLowerCase().trim() || '',
    status: procValue(filterForm.statusFilter?.value.toLowerCase()),
    species: procValue(filterForm.speciesFilter?.value.toLowerCase()),
    type: procValue(filterForm.typeFilter?.value.toLowerCase()),
    gender: procValue(filterForm.genderFilter?.value.toLowerCase()),
    episode: procValue(),
  };

  localStorage.setItem('filtersData', JSON.stringify(updatedFilterData));

  CharacterCards(e, true);
};

export const handleChangeEpisode = (e) => {
  if (e.type === 'submit') {
    e.preventDefault();
  }

  const form = e.currentTarget;

  const rawValue = form.elements.episodesFilter?.value || '';

  let episodeValue = rawValue === 'All season' ? '' : rawValue.split(' ')[0];

  const updatedFilterData = {
    page: 1,
    totalPages: 1,
    name: form.elements.nameFilter?.value.toLowerCase().trim() || '',
    episode: episodeValue,
  };

  localStorage.setItem('filtersDataEpisode', JSON.stringify(updatedFilterData));

  EpisodCards(e, true);
};

import { Modal } from '../components/modal';
import { ModalEpisodes } from '../components/modalEpisodes';

const handleCloseModal = () => {
  const body = document.body;
  const modal = document.querySelector('[data-modal]');
  const closeBtn = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('.backdrop');

  body.classList.remove('no-scroll');
  modal.remove();
  backdrop.remove();

  closeBtn.removeEventListener('click', handleCloseModal);
};

export const initModalLogic = () => {
  const closeBtn = document.querySelector('[data-modal-close]');
  closeBtn.addEventListener('click', handleCloseModal);
};

export const handleOpenModalChars = (e) => {
  const charId = e.target.closest('[data-character-id]').dataset.characterId;
  if (charId) {
    Modal(charId);
  }
};

export const handleOpenModalEpisode = (e) => {
  const episId = e.target.closest('[data-episode-id]').dataset.episodeId;
  if (episId) {
    ModalEpisodes(episId);
  }
};

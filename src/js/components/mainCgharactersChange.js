const characters = document.querySelectorAll(".main-character");
const image = document.querySelector(".main-characters__img");
const imageWrapper = document.querySelector(".main-characters__image");

characters.forEach((character) => {
  character.addEventListener("click", () => {
    const newImage = character.dataset.image;
    const newBg = character.dataset.bg;

    image.src = newImage;
    imageWrapper.style.backgroundColor = newBg;

    characters.forEach((c) => c.classList.remove("active"));
    character.classList.add("active");
  });
});

const characters = document.querySelectorAll(".main-character");
const image = document.querySelector(".main-characters__img");
const imageWrapper = document.querySelector(".main-characters__image");

const characterImages = {
  rick: new URL("../../images/rick2.webp", import.meta.url).href,
  morty: new URL("../../images/morty-smith.png", import.meta.url).href,
  summer: new URL("../../images/summer-smith.png", import.meta.url).href,
  beth: new URL("../../images/beth-smith.png", import.meta.url).href,
  jerry: new URL("../../images/jerry-smith.png", import.meta.url).href,
};

characters.forEach((character) => {
  character.addEventListener("click", () => {
    const characterKey = character.dataset.image;
    const newImage = characterImages[characterKey];
    const newBg = character.dataset.bg;

    image.src = newImage;
    imageWrapper.style.backgroundColor = newBg;

    characters.forEach((c) => c.classList.remove("active"));
    character.classList.add("active");
  });
});

import mortySmith from "../../images/morty-smith.png";
import summerSmith from "../../images/summer-smith.png";
import bethSmith from "../../images/beth-smith.png";
import jerrySmith from "../../images/jerry-smith.png";

const characters = document.querySelectorAll(".main-character");
const image = document.querySelector(".main-characters__img");
const imageWrapper = document.querySelector(".main-characters__image");

const characterImages = {
  mortysmith: mortySmith,
  summersmith: summerSmith,
  bethsmith: bethSmith,
  jerrysmith: jerrySmith,
};

console.log(bethSmith);

characters.forEach((character) => {
  character.addEventListener("click", () => {
    const characterPhotoMeta = character.dataset.image;
    const newImage = characterImages[characterPhotoMeta];

    console.log(characterImages[characterPhotoMeta]);

    const newBg = character.dataset.bg;

    console.log(characterPhotoMeta);

    image.src = newImage;
    imageWrapper.style.backgroundColor = newBg;

    characters.forEach((c) => c.classList.remove("active"));
    character.classList.add("active");
  });
});

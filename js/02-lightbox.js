import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
function galleryBox(array) {
  array.map((el) => {
    const markUp = `<li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
   </a>
</li>`;
    galleryList.insertAdjacentHTML("beforeend", markUp);
  });
}

galleryBox(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250ms",
});

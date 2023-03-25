import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
function galleryBox(array) {
  array.map((el) => {
    // console.log(el);
    const markUp = `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`;
    galleryList.insertAdjacentHTML("beforeend", markUp);
  });
}
galleryBox(galleryItems);

galleryList.addEventListener("click", selectImage);

function selectImage(evt) {
  evt.preventDefault();
  console.dir(evt.target.dataset);
  const largeImage = evt.target.dataset.source;
  const modal = basicLightbox.create(
    `<img width="1200" height="800" src="${largeImage}"/>`
  );
  modal.show();
  document.addEventListener("keydown", handlEscPress);

  function handlEscPress(evt) {
    if (evt.key === "Escape") {
      modal.close();
      console.log(evt.key);
      document.removeEventListener("keydown", handlEscPress);
    }
  }
}

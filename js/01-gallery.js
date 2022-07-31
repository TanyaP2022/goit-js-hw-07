import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

function markupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <div class="gallery__item">
            <a class="gallery__link" href='${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
            />
            </a>
        </div>
        `;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", markupGalleryItems(galleryItems));
gallery.addEventListener("click", oneImageContainerClik);

function oneImageContainerClik(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`
  );
  instance.show(() => window.addEventListener("keydown", oneImageKeyPress));
  function oneImageKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close(() =>
        window.removeEventListener("keydown", oneImageKeyPress)
      );
      console.log(evt.key);
      return;
    }
    return;
  }
}

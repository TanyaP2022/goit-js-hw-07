import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function markupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <div class="gallery__cont">
            <a class="gallery__item" href='${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                alt='${description}'
            />
            </a>
        </div>
        `;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", markupGalleryItems(galleryItems));
const galleryN = new SimpleLightbox(".gallery__item", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  galleryContainer: document.querySelector(".js-gallery"),
  lightboxContainer: document.querySelector(".js-lightbox"),
  closeModalBtn: document.querySelector("[data-action='close-lightbox']"),
  modalImg: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
};

const galleryItemMurkup = createGalleryListItem(galleryItems);

refs.galleryContainer.insertAdjacentHTML("beforeend", galleryItemMurkup);
refs.overlay.addEventListener("click", removeModalOpenClass);
refs.galleryContainer.addEventListener("click", onGalleryContainerClick);
refs.closeModalBtn.addEventListener("click", removeModalOpenClass);

function createGalleryListItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
    })
    .join("");
}

function onGalleryContainerClick(e) {
  const isGalleryImageEL = e.target.classList.contains("gallery__image");
  const modalImgSource = e.target.dataset.source;
  const modalImgAlt = e.target.getAttribute("alt");
  const modalWindow = document.querySelector(".lightbox");
  refs.modalImg.src = modalImgSource;
  refs.modalImg.alt = modalImgAlt;

  if (!isGalleryImageEL) {
    return;
  }

  e.preventDefault();
  addModalOpenClass(modalWindow);
}

function addModalOpenClass(modal) {
  modal.classList.add("is-open");
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    removeModalOpenClass();
  }
});

function removeModalOpenClass() {
  refs.lightboxContainer.classList.remove("is-open");
  refs.modalImg.src = "";
  refs.modalImg.alt = "";
}

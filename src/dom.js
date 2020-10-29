import { slideToSelectedImage, resetTimer } from "./index.js";

function addImageToDom(image) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.classList.add("image");
  img.src = image;
  div.appendChild(img);
  div.classList.add("hide", "image-container");
  const container = document.querySelector(".slideshow-container");
  container.appendChild(div);
}

function addImagesToDom(images) {
  images.forEach((image) => addImageToDom(image));
}

function displayImage(index) {
  const image = document.querySelectorAll(".image-container")[index];
  image.classList.remove("hide");
  highlightDot(index);
}

function hideImage(index) {
  const image = document.querySelectorAll(".image-container")[index];
  image.classList.add("hide");
  unhighlightDot(index);
}

function addDotToDom() {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.dataset.index = document.querySelectorAll(".dot").length;
  dot.addEventListener("click", slideToSelectedImage);
  dot.addEventListener("click", resetTimer);
  document.querySelector(".dots").appendChild(dot);
}

function addDotsToDom(numImages) {
  for (let i = 0; i < numImages; i++) {
    addDotToDom();
  }
}

function unhighlightDot(index) {
  const dot = document.querySelectorAll(".dot")[index];
  dot.classList.remove("highlight");
}

function highlightDot(index) {
  const dot = document.querySelectorAll(".dot")[index];
  dot.classList.add("highlight");
}

export { addImagesToDom, displayImage, hideImage, addDotsToDom, addDotToDom };

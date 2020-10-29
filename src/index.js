import {
  addImagesToDom,
  displayImage,
  hideImage,
  addDotsToDom,
} from "./dom.js";

const images = [
  "../images/image1.jpg",
  "../images/image2.jpg",
  "../images/image3.jpg",
  "../images/image4.jpg",
];
let currentIndex = 1;
let timer;

function slideNext() {
  hideImage(currentIndex);
  currentIndex = currentIndex + 1 == images.length ? 0 : currentIndex + 1;
  displayImage(currentIndex);
}

function slideBefore() {
  hideImage(currentIndex);
  currentIndex = currentIndex == 0 ? images.length - 1 : currentIndex - 1;
  displayImage(currentIndex);
}

function slideToSelectedImage(e) {
  hideImage(currentIndex);
  currentIndex = Number(e.target.dataset.index);
  displayImage(currentIndex);
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(slideNext, 5000);
}

document.querySelector(".prev").addEventListener("click", slideBefore);
document.querySelector(".next").addEventListener("click", slideNext);
document.querySelector(".prev").addEventListener("click", resetTimer);
document.querySelector(".next").addEventListener("click", resetTimer);

addImagesToDom(images);
addDotsToDom(images.length);
displayImage(currentIndex);

timer = setInterval(slideNext, 5000);

export { slideToSelectedImage, resetTimer };

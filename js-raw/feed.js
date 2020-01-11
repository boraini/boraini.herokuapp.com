import carousel from "./_carousel.js"
window.onload = setup;
let newsCarousel;
function setup() {
  newsCarousel = new carousel(document.getElementById("news"), {animationDuration: 1000, interval: 3000, autoplay: true});
}

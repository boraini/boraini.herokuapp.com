export default function carousel(el, {
  start = 0,
	loop = false,
	interactive = true,
	interval = 3000,
	animationDuration = 500,
	autoplay = false
	}) {
  if (el instanceof Element) {
	  this.target = el;
		this.animationDuration = animationDuration;
		this.interval = interval;
		this.loop = loop;
	  this.items = el.querySelectorAll(".carousel-item");
		if (!items) return;
		this.dots = [];
		for (let i = 0; i < items.length; i++) {
		  let dot = el.querySelector("carousel-dot-" + i);
			this.dots.push(dot);
			if (dot instanceof Element) dot.setAttribute("carousel-index", i);
		}
		this.currentIndex = start;
	  this.next = () => {
		  let prevIndex = this.currentIndex;
			this.currentIndex++;
			if (this.currentIndex >= this.items.length) {
			  if (this.loop) this.currentIndex = 0; else return;
			}
			let nextIndex = this.currentIndex;
			this.items[prevIndex].classList.add("carousel-exit-left");
			this.items[nextIndex].classList.add("carousel-enter-right");
			this.items[prevIndex].classList.remove("carousel-visible");
			this.items[nextIndex].classList.remove("carousel-hidden");
			if (this.dots[prevIndex] instanceof Element) {
			  this.dots[prevIndex].classList.add("inactive");
			  this.dots[nextIndex].classList.add("active");
			  this.dots[prevIndex].classList.remove("active");
			  this.dots[nextIndex].classList.remove("inactive");
			}
			setTimeout(() => {
			  this.items[prevIndex].classList.add("carousel-hidden");
			  this.items[nextIndex].classList.add("carousel-visible");
			  this.items[prevIndex].classList.remove("carousel-exit-left");
			  this.items[nextIndex].classList.remove("carousel-enter-right");
			}, this.animationDuration);
		}
	  this.prev = () => {
		  let prevIndex = this.currentIndex;
			this.currentIndex--;
			if (this.currentIndex <= 0) {
			  if (this.loop) this.currentIndex = this.items.length; else return;
			}
			let nextIndex = this.currentIndex;
			this.items[prevIndex].classList.add("carousel-exit-right");
			this.items[nextIndex].classList.add("carousel-enter-left");
			this.items[prevIndex].classList.remove("carousel-visible");
			this.items[nextIndex].classList.remove("carousel-hidden");
			if (this.dots[prevIndex] instanceof Element) {
			  this.dots[prevIndex].classList.add("inactive");
			  this.dots[nextIndex].classList.add("active");
			  this.dots[prevIndex].classList.remove("active");
			  this.dots[nextIndex].classList.remove("inactive");
			}
			setTimeout(() => {
			  this.items[prevIndex].classList.add("carousel-hidden");
			  this.items[nextIndex].classList.add("carousel-visible");
			  this.items[prevIndex].classList.remove("carousel-exit-right");
			  this.items[nextIndex].classList.remove("carousel-enter-left");
			}, this.animationDuration);
		}
	  this.goto = (i) => {
		  if (this.currentIndex == i) return;
		  let prevIndex = this.currentIndex;
			this.currentIndex = i;
			let nextIndex = this.currentIndex;
			this.items[prevIndex].classList.add("carousel-exit-left");
			this.items[nextIndex].classList.add("carousel-enter-right");
			this.items[prevIndex].classList.remove("carousel-visible");
			this.items[nextIndex].classList.remove("carousel-hidden");
			if (this.dots[prevIndex] instanceof Element) {
			  this.dots[prevIndex].classList.add("inactive");
			  this.dots[nextIndex].classList.add("active");
			  this.dots[prevIndex].classList.remove("active");
			  this.dots[nextIndex].classList.remove("inactive");
			}
			setTimeout(() => {
			  this.items[prevIndex].classList.add("carousel-hidden");
			  this.items[nextIndex].classList.add("carousel-visible");
			  this.items[prevIndex].classList.remove("carousel-exit-left");
			  this.items[nextIndex].classList.remove("carousel-enter-right");
			}, this.animationDuration);
		}
		this.startAutoplay = () => {
		  if (!this.autoplayer) {
        if (interval < 0) this.autoplayer = setInterval(this.prev, -this.interval); else this.autoplayer = setInterval(this.next, this.interval);
			}
		}
		this.stopAutoplay = () => {
      if (this.autoplayer) {
			  clearInterval(this.autoplayer);
			  delete this.autoplayer;
			}
		}
    if (interactive) {
      let elem = el.querySelector(".carousel-prev");
			if (elem instanceof Elements) elem.addEventListener("click", this.prev);
			    elem = el.querySelector(".carousel-next");
			if (elem instanceof Elements) elem.addEventListener("click", this.next);
			for (let dot in this.dots) {
        if (dot instanceof dots) dot.addEventListener("click", (e) => {this.goto(parseInt(e.target.getAttribute("carousel-index")));});
			}
		}
		if (autoplay) this.startAutoplay();
	}
}

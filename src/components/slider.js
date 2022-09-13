cardSlider = document.querySelector(".card-slider");

let clientX = null;
let grabbing = false;
let prevDistanceScrolled = null;
let distanceToScroll;

cardSlider.addEventListener("mousedown",(e) => {
  clientX = e.clientX;
  grabbing=true;
})

cardSlider.addEventListener("mouseup",() => {
  grabbing=false;
  prevDistanceScrolled += distanceToScroll;
})

cardSlider.addEventListener("mousemove",(e) => {
  if (grabbing) {
    let newClientX = e.clientX;
    distanceToScroll = newClientX - clientX;
    cardSlider.style.transform = `translateX(${distanceToScroll + prevDistanceScrolled}px)`
  }
})
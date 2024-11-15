const carousel = document.querySelector(".carousel");
const imgs = document.querySelectorAll(".carousel .carousel-img");

let counter = 0;
function slider() {
    carousel.style.transform = `translateX(${-counter * 540}px)`;
}

function sliderRight(){
    if (counter >= imgs.length-1){
        counter = 0;
        slider();
        return
    }
    counter++;
    slider();
}
// setInterval(slider, 2000);
function sliderLeft(){
    if (counter <= 0){
        counter = 0
        return
    }
    counter--;
    slider();
}
document.getElementById("right-btn").addEventListener('click', sliderRight)
document.getElementById("left-btn").addEventListener('click', sliderLeft)
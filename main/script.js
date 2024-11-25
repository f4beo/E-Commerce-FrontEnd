const carousel = document.querySelector(".carousel");
const imgs = document.querySelectorAll(".carousel .carousel-img");

let counter = 0;
function slider() {
    carousel.style.transform = `translateX(${-counter * document.querySelector(".divisor-carrosel").clientWidth}px)`;
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
        counter = imgs.length-1
        slider();
        return
    }
    counter--;
    slider();
}
document.getElementById("right-btn").addEventListener('click', sliderRight)
document.getElementById("left-btn").addEventListener('click', sliderLeft)


// botao login

const login = document.querySelector(".popup-login")
const modalLogin = document.querySelector(".modal-Login")
const loginClose = document.querySelector("dialog login")

login.onclick = function() {
    modalLogin.showModal()
}

buttonClose.onclick = function() {
    modalLogin.close()
}
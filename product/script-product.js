const lista = document.querySelectorAll("li img");
const destaque = document.querySelector("#destaque");

function destacar(i) {
    i.addEventListener("click", substituir);
}
function substituir(b) {
    const src = b.currentTarget.src;
    console.log(destaque.src);
    destaque.src = src;
    destaque.alt = b.currentTarget.alt;
}
lista.forEach(destacar);

const login = document.querySelector(".popup-login");
const modalLogin = document.querySelector(".modal-Login");
const loginClose = document.querySelector("dialog login");

login.onclick = function () {
    modalLogin.showModal();
};

buttonClose.onclick = function () {
    modalLogin.close();
};

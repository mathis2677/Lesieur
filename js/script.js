const btPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector(".conteneur-transports");

btPlus.addEventListener('click', fouvreferme);

function fouvreferme(){

    conteneur.classList.toggle('conteneur-transports-invisible');
}
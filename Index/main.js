const btnOpenModal = document.getElementById('inicioSesion')
const modal = document.getElementById('modal')
let isOpenModal = false

fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then((json) => {
        console.log(json)
        const text =
            document.getElementById('_name').innerHTML = json.results[0].name.first;
        document.getElementById('_img').setAttribute("src", json.results[0].picture.large)
        console.log(document.getElementById('_img').getAttribute("src"))
    })

btnOpenModal.addEventListener('click', (event) => openModal())

function openModal() {
    if (isOpenModal) {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'flex'
    }
    isOpenModal = !isOpenModal
}



const btnOpenModalR = document.getElementById('registrarse')
const modalR = document.getElementById('modalR')
let isOpenModalR = false

btnOpenModalR.addEventListener('click', (event) => openModalR())

function openModalR() {

    if (isOpenModalR) {
        modalR.style.display = 'none'
    } else {

        modalR.style.display = 'flex'

    }
    isOpenModalR = !isOpenModalR
}


/// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
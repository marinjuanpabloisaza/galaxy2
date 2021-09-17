const btnOpenModal = document.getElementById('inicioSesion')
const modal = document.getElementById('modal')
let isOpenModal = false

btnOpenModal.addEventListener('click', (event) => openModal())

function openModal() {

    if (isOpenModal) {
        modal.style.display = 'none'
    } else {

        modal.style.display = 'flex'

    }
    isOpenModal = !isOpenModal

}
/*
modal.addEventListener('click', (event) => {
    console.log(event.target);
    modal.style.display = 'flex'
    console.log(event.target, modal);
    if (event.target != modal.target) {
        event.preventDefault()

    }
})*/
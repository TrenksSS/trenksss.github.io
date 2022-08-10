const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('redes_sociais')
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu)
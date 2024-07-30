// function redirectToPage() {
//     window.location.href = "https://www.example.com"; /* Manzilga yo‘naltirish */
// }

window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar')
    if (window.scrollY >= 165) {
        navbar.classList.add('navbar-float')
    } else {
        navbar.classList.remove('navbar-float')
    }
})
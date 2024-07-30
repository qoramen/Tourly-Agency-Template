// function redirectToPage() {
//     window.location.href = "https://www.example.com"; /* Manzilga yo‘naltirish */
// }

window.addEventListener('scroll', function () {

    const navbar = document.querySelector('.navbar')
    const home = document.querySelector('.home')
    if (window.scrollY >= 165) {
        navbar.classList.add('navbar-float')
        home.classList.add('home-nav')
    } else {
        navbar.classList.remove('navbar-float')
        home.classList.remove('home-nav')
    }
});

const darkThemeToggle = document.getElementById('dark-theme-btn');
const darkThemeIcon = document.getElementById('icon')

darkThemeToggle.addEventListener('click', function(){
    if(darkThemeIcon.classList.contains('fa-moon')){
        darkThemeIcon.classList.add('fa-sun');
        darkThemeIcon.classList.remove('fa-moon');
    } else {
        darkThemeIcon.classList.add('fa-moon');
        darkThemeIcon.classList.remove('fa-sun');
    }
    document.body.classList.toggle('dark-theme-palate')
})
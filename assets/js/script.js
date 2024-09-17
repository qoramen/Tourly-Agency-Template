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

darkThemeToggle.addEventListener('click', function () {

    const darkThemeIcon = document.getElementById('icon')

    if (darkThemeIcon.classList.contains('fa-moon')) {
        darkThemeIcon.classList.add('fa-sun');
        darkThemeIcon.classList.remove('fa-moon');
    } else {
        darkThemeIcon.classList.add('fa-moon');
        darkThemeIcon.classList.remove('fa-sun');
    }
    document.body.classList.toggle('dark-theme-palate')
})

const inquireBtn = document.getElementById('inquire').addEventListener('click', datas)

class Offer {
    constructor(destination, people, checkingDate, checkoutDate,) {
        this.destination = destination
        this.people = people
        this.checkingDate = checkingDate
        this.checkoutDate = checkoutDate
        this.#takenDatas()
    }

    #takenDatas() {
        console.log(
            `Destination: ${this.destination}; No. of people: ${this.people}; Checking date: ${this.checkingDate};Checkout date: ${this.checkoutDate};`
        );
    }
}

function datas() {
    const destinationTaken = document.getElementById('dataDes')
    const maxPeopleTaken = document.getElementById('dataNum')
    const checkingDateTaken = document.getElementById('dataDate1')
    const checkoutDateTaken = document.getElementById('dataDate2')

    if (destinationTaken.value != '' && maxPeopleTaken.value != '' && checkingDateTaken.value != '' && checkoutDateTaken.value != '') {
        const newFly = new Offer(destinationTaken.value, maxPeopleTaken.value, checkingDateTaken.value, checkoutDateTaken.value)
        destinationTaken.value = ''
        maxPeopleTaken.value = ''
        checkingDateTaken.value = ''
        checkoutDateTaken.value = ''
    } else {
        alert('Please fill all sections')
    }
}
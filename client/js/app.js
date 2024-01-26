const container = document.querySelector('.container');
// 아래의 배열이 이제 DB에서 꺼내져와야 함, mock data 임.
const coffees = [
    {
        name: 'Perspiciatis',
        image: 'images/coffee1.jpg',
    },
    {
        name: 'Voluptatem',
        image: 'images/coffee2.jpg',
    },
    {
        name: 'Explicabo',
        image: 'images/coffee3.jpg',
    },
    {
        name: 'Rchitecto',
        image: 'images/coffee4.jpg',
    },
    {
        name: ' Beatae',
        image: 'images/coffee5.jpg',
    },
    {
        name: ' Vitae',
        image: 'images/coffee6.jpg',
    },
    {
        name: 'Inventore',
        image: 'images/coffee7.jpg',
    },
    {
        name: 'Veritatis',
        image: 'images/coffee8.jpg',
    },
    {
        name: 'Accusantium',
        image: 'images/coffee9.jpg',
    },
];
// src -> https://source.unsplash.com/random/?programming/300x300
const showCoffees = () => {
    let output = '';
    coffees.forEach(
        ({ name, image }) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
    );
    container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((res) => console.log('service worker registered'))
            .catch((err) => console.log('service worker not registered', err));
    });
}

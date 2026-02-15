const homepageSearchButton = document.getElementById('search-button');

homepageSearchButton.addEventListener('click', () => {
    window.location.href = "/subpage/search.html"
});

const cardButton = document.getElementsByClassName('card-button');

document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < cardButton.length; i++) {
        cardButton[i].addEventListener('click', (e) => {
            window.location.href = e.currentTarget.dataset.link;
        });
    }
});
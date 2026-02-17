const redirectButton = document.getElementById('panel-redirect-button');

redirectButton.addEventListener('click', (e) => {
    console.log('working');
    window.location.href = e.currentTarget.dataset.link;
});
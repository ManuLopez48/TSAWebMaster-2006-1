const pathParts = window.location.pathname.split("/");
const repoName = pathParts[1];

const basePath = window.location.hostname.includes("github.io") ? `/${repoName}/`: "/";

document.addEventListener('DOMContentLoaded', () => {
    const listings =  document.getElementsByClassName('section-listing');
    
    for(let i = 0; i < listings.length; i++) {
        listings[i].addEventListener('click', (e) => {
            window.location.href = basePath + e.currentTarget.dataset.link;
        })
    }
});
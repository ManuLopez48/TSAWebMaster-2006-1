// Javascript rn is on one file, in production its often better to set it on one
// file to minimize loading multiple files over web.
const homepageSearchButton = document.getElementById('search-button');

homepageSearchButton.addEventListener('click', () => {
    window.location.href = "/subpage/search.html"
});

// Find Page
const addKeywordInputField = document.getElementById('search-box-add');
const searchBoxInputFields = document.getElementByClass('search-box-input-fields');

addKeywordInputField.addEventListener('click', () => {
    console.log('Adding Keyword Field');
    const field = document.createElement('input');

    field.className = "search-box-input-field";
    field.type = "text";
    field.name="keyword-field";

    searchBoxInputFields.insertAdjacentElement('afterend', field);
});
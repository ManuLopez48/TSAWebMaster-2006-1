const addKeywordInputField = document.getElementById('search-box-add');
const removeKeywordInputField = document.getElementById('search-box-remove')
const searchBoxInputFields = document.getElementsByClassName('search-box-input-fields-holder');

addKeywordInputField.addEventListener('click', () => {
    console.log('Adding Keyword Field');
    const field = document.createElement('input');

    field.className = "search-box-input-field";
    field.type = "text";
    field.name="keyword-field";

    searchBoxInputFields[0].insertAdjacentElement('beforeend', field);
});

removeKeywordInputField.addEventListener('click', () => {
    const fields = document.getElementsByClassName('search-box-input-field');
    if(fields.length > 1) {
        console.log('Removing Keyword Field');
        fields[fields.length - 1].remove();
    }
});
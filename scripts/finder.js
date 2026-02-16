const addKeywordInputField = document.getElementById('search-box-add');
const searchBoxInputFields = document.getElementsByClassName('search-box-input-fields-holder');


addKeywordInputField.addEventListener('click', () => {
    console.log('Adding Keyword Field');
    const layout = document.createElement('div');
    const field = document.createElement('input');
    const removeBtn = document.createElement('button');

    layout.className = "search-box-input-field-layout";

    field.className = "search-box-input-field";
    field.type = "text";
    field.name="keyword-field";

    removeBtn.className = "search-box-remove"
    removeBtn.textContent = "-"

    layout.append(field);
    layout.append(removeBtn);

    searchBoxInputFields[0].insertAdjacentElement('beforeend', layout);

    removeBtn.addEventListener('click', () => {
        layout.remove();
    });
});

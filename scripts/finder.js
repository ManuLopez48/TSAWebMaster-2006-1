const addKeywordInputField = document.getElementById('search-box-add');
const searchBoxInputFields = document.getElementsByClassName('search-box-input-fields-holder');
const findButton = document.getElementById('search-box-btn');

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


findButton.addEventListener('click', findResource);

async function findResource() {
    console.log('finding...')
    const keywords = document.getElementsByClassName('search-box-input-field');
    
    const keywordLibrary = await loadJSON();
    
    const searchTerms = Array.from(keywords).map(word => word.value.trim().toLowerCase()).filter(word => word !== "");
    if(searchTerms.length === 0) return;
    
    const pageResultsFromKeywords = searchTerms.map(word => keywordLibrary[word] || [])
    
}

async function loadJSON() {
  const response = await fetch('/community-resource/keywords/keyword-table.json');
  const data = await response.json();
  return data;
}
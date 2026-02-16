const addKeywordInputField = document.getElementById('search-box-add');
const searchBoxInputFields = document.getElementsByClassName('search-box-input-fields-holder');
const findButton = document.getElementById('search-box-btn');
const resultsHolder = document.getElementById('search-results');

addKeywordInputField.addEventListener('click', () => {
    // console.log('Adding Keyword Field');
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
    removePreviousResults();

    console.log('finding...')
    const keywords = document.getElementsByClassName('search-box-input-field');
    
    const keywordLibrary = await loadKeywordJSON();
    const pageInfo = await loadPageJSON();
    
    const searchTerms = Array.from(keywords).map(word => word.value.trim().toLowerCase()).filter(word => word !== "");
    if(searchTerms.length === 0) return;
    
    const pageResultsFromKeywords = searchTerms.map(word => keywordLibrary[word] || [])
    console.log("Results Unfiltered:");
    console.log(pageResultsFromKeywords);

    const resultsFiltered = pageResultsFromKeywords.reduce((prev, current) => {
        const currentToSet = new Set(current);
        return prev.filter(arrLikeAPirate => currentToSet.has(arrLikeAPirate)); // Im so tired
    });
    console.log("Results Filtered:");
    console.log(resultsFiltered);

    
    const pagesDataFound = [];
    for(let resultIndex = 0; resultIndex < resultsFiltered.length; resultIndex++) {
        const currentPageID = resultsFiltered[resultIndex];
        console.log("Current ID: " + currentPageID);
        for(let pageIndex = 0; pageIndex < pageInfo.length; pageIndex++) {
            console.log("Page Looked At: " + pageInfo[pageIndex].id);
            console.log("Found: " + (pageInfo[pageIndex].id == currentPageID))
            if(pageInfo[pageIndex].id == currentPageID) {
                console.log(pageInfo[pageIndex].id);
                pagesDataFound.push(pageInfo[pageIndex]);
            }
        }
    }

    console.log("Page Data:");
    console.log(pagesDataFound);
    for(let i = 0; i < pagesDataFound.length; i++) {
        buildResultCard(pagesDataFound[i].logo, pagesDataFound[i].title, pagesDataFound[i].shortSummary, pagesDataFound[i].url)
    }
}

async function loadKeywordJSON() {
  const response = await fetch('/community-resource/keywords/keyword-table.json');
  const data = await response.json();
  return data;
}

async function loadPageJSON() {
    const response = await fetch('/community-resource/page-data/pages.json')
    const data = await response.json();
    return data;
}

function buildResultCard(logo, name, summary, url) {
    const searchResult = document.createElement('article');
    const searchImg = document.createElement('img');
    const searchInfo = document.createElement('summary');
    const searchTitle = document.createElement('h1');
    const searchSummary = document.createElement('p');

    searchResult.className = "search-result";
    searchImg.className = "search-result-img";
    searchInfo.className = "search-result-info";
    searchTitle.className = "search-result-title";
    searchSummary.className = "short-summary";

    searchImg.src = logo;
    searchTitle.textContent = name;
    searchSummary.textContent = summary;
    searchInfo.append(searchTitle, searchSummary);
    searchResult.append(searchImg, searchInfo);

    resultsHolder.insertAdjacentElement('beforeend', searchResult);

    searchResult.addEventListener('click', () => {
        window.location.href = url;
    });
}

function removePreviousResults() {
    const previousSearchResults = document.getElementsByClassName('search-result');
    const size = previousSearchResults.length;
    if(size === 0) return;

    for(let i = size; i > 0; i--) {
        previousSearchResults[i].remove();
    }
}
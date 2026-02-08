const rangedDateToggle = document.getElementById('form-event-date-toggle');
const formSingleDateDiv = document.getElementById('form-single-date');
const formMultiDateDiv = document.getElementById('form-multi-date');

document.addEventListener('DOMContentLoaded', () => {
    checkDateSetup();
});

rangedDateToggle.addEventListener('change', checkDateSetup);

function checkDateSetup() {
    if(rangedDateToggle.checked) {
        // console.log('on');
        formSingleDateDiv.hidden = true;
        formMultiDateDiv.hidden = false;
    } else {
        // console.log('off');
        formSingleDateDiv.hidden = false;
        formMultiDateDiv.hidden = true;
    }
}

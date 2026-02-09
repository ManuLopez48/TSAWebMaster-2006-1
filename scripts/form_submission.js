// Info & Contact Elements
const submissionName = document.getElementById('form-addition-name');
const organizationName = document.getElementById('form-organization-name');
const contactEmail = document.getElementById('form-organization-contact-email');
const contactPhone = document.getElementById('form-organization-contact-phone');

// Image Elements

//Summary Elements
const mainSummary = document.getElementById('form-summary');
const shortSummary = document.getElementById('form-short-summary');

// Date Elements
const rangedDateToggle = document.getElementById('form-event-date-toggle');
const formSingleDateDiv = document.getElementById('form-single-date');
const formMultiDateDiv = document.getElementById('form-multi-date');

// Submission Button
const submitButton = document.getElementById('submit-button')

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


// Info & Contact Elements
const submissionName = document.getElementById('form-addition-name');
const organizationName = document.getElementById('form-organization-name');
const contactEmail = document.getElementById('form-organization-contact-email');
const contactPhone = document.getElementById('form-organization-contact-phone');

// Image Elements
const organizationLogo = document.getElementById('form-add-image-input-organization');
const eventImg = document.getElementById('form-add-image-additional-input');

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

submitButton.addEventListener('click', () => {
    if(confirm("Are you sure you want to submit?")) {
        alert("Entry Submitted");
        window.location.href = "/subpage/submit.html";

        // Generate HTML Page Here
    }
});

organizationLogo.addEventListener('change', (event) => {
    const submitted = event.target;

    if(submitted.files && submitted.files[0]) {
        const organizationIMGUploaded = document.getElementById('og-img-uploaded');
        const url = URL.createObjectURL(submitted.files[0]);

        organizationIMGUploaded.src = url;
        organizationIMGUploaded.style.display = 'block';
        organizationIMGUploaded.style.width = '100px';
        organizationIMGUploaded.style.height = '100px';

        organizationIMGUploaded.onload = () => URL.revokeObjectURL(url);
    }
    console.log('Organization Submit Working');
});

eventImg.addEventListener('change', (event) => {
    const submitted = event.target;

    if(submitted.files && submitted.files[0]) {
        const organizationIMGUploaded = document.getElementById('og-img-uploaded');
        const url = URL.createObjectURL(submitted.files[0]);

        organizationIMGUploaded.src = url;
        organizationIMGUploaded.style.display = 'block';
        organizationIMGUploaded.style.width = '100px';
        organizationIMGUploaded.style.height = '100px';

        organizationIMGUploaded.onload = () => URL.revokeObjectURL(url);
    }
    console.log('Img Submit Working');
});
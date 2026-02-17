// Info & Contact Elements
const submissionName = document.getElementById('form-addition-name');
const organizationName = document.getElementById('form-organization-name');
const contactEmail = document.getElementById('form-organization-contact-email');
const contactPhone = document.getElementById('form-organization-contact-phone');

// Image Elements
const addOrganizationLogo = document.getElementById('form-add-image-input-organization');
const addAdditionalImg = document.getElementById('form-add-image-additional-input');

const checkOrgImg = document.getElementById('form-view-organization-img-btn');
const checkAdditionalImg = document.getElementById('form-view-additional-img-btn');

const removeOrgImg = document.getElementById('form-remove-organization-img-btn');
const removeAddiImg = document.getElementById('form-remove-additional-img-btn');

// Image View - Modal
const closeModal = document.getElementById('close-img-modal')

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
    console.log(submissionName.value.trim());

    if(submissionName.value.trim() === "" && contactPhone.value.trim() === "" && mainSummary.value.trim() === "" && shortSummary.value.trim() === "") {
        alert("Missing Required Sections");
    } else {
        if(confirm("Are you sure you want to submit?")) {
            alert("Entry Submitted");
            window.location.href = "./subpage/submit.html";
        }
    }
});

addOrganizationLogo.addEventListener('change', (event) => {
    const submitted = event.target;

    if(submitted.files && submitted.files[0]) {
        const imgOrg = document.getElementById('uploaded-image-displayed-org');
        const url = URL.createObjectURL(submitted.files[0]);
        console.log(imgOrg);

        imgOrg.src = url;


        imgOrg.onload = () => URL.revokeObjectURL(url);
    }
    console.log('Organization Submit Working');
});

addAdditionalImg.addEventListener('change', (event) => {
    const submitted = event.target;

    console.log("registering");
    if(submitted.files && submitted.files[0]) {
        const imgAddi = document.getElementById('uploaded-image-displayed-addi');
        const url = URL.createObjectURL(submitted.files[0]);

        imgAddi.src = url;

        imgAddi.onload = () => URL.revokeObjectURL(url);
    }
    console.log('Img Submit Working');
});
 
checkOrgImg.addEventListener('click', () => {
    const modal = document.getElementById('image-uploaded-modal');
    const imgOrg = document.getElementById('uploaded-image-displayed-org');
    const imgAddi = document.getElementById('uploaded-image-displayed-addi');
    imgOrg.hidden = false;
    imgAddi.hidden = true;
    modal.classList.add("open");
});

checkAdditionalImg.addEventListener('click', () => {
    const modal = document.getElementById('image-uploaded-modal');
    const imgOrg = document.getElementById('uploaded-image-displayed-org');
    const imgAddi = document.getElementById('uploaded-image-displayed-addi');
    imgOrg.hidden = true;
    imgAddi.hidden = false;
    modal.classList.add("open");
});

closeModal.addEventListener('click', () => {
    const modal = document.getElementById('image-uploaded-modal');
    const imgOrg = document.getElementById('uploaded-image-displayed-org');
    const imgAddi = document.getElementById('uploaded-image-displayed-addi');
    imgOrg.hidden = true;
    imgAddi.hidden = true;

    modal.classList.remove("open");
});

removeOrgImg.addEventListener('click', () => {
    const imgOrg = document.getElementById('uploaded-image-displayed-org');
    imgOrg.src = "";
    addOrganizationLogo.value = "";
    console.log('works');
});

removeAddiImg.addEventListener('click', () => {
    const imgAddi = document.getElementById('uploaded-image-displayed-addi');
    imgAddi.src = "";
    checkAdditionalImg.value = "";
    console.log('works');
});
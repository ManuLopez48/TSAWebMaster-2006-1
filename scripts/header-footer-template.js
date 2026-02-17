class CommonHeader extends HTMLElement {
    connectedCallback() {
        const commonHeader = document.createElement('header');
        const commonTopBar = document.createElement('nav');
        const commonHeaderLogoHolder = document.createElement('div');
        const commonHeaderLogo = document.createElement('img');
        const commonTopNavLinkHome = document.createElement('a');
        const commonTopNavLinkSearch = document.createElement('a');
        const commonTopNavLinkSubmit = document.createElement('a');
        const commonTopNavLinkAbout = document.createElement('a');

        commonHeader.className = 'common-header'; // Really header is just here for semantics; a header which has a nav. 

        commonTopBar.className = 'common-top-bar';

        commonHeaderLogoHolder.className = 'common-header-logo-holder';
        commonHeaderLogo.className = 'common-header-logo';
        commonHeaderLogo.src = '/images/website/icons/ElPasoCommunityProjectIconBlack.png';

        commonTopNavLinkHome.className = 'common-top-nav-link';
        commonTopNavLinkHome.href = '/index.html';
        commonTopNavLinkHome.textContent = 'Home';

        commonTopNavLinkSearch.className = 'common-top-nav-link';
        commonTopNavLinkSearch.href = '/subpage/search.html';
        commonTopNavLinkSearch.textContent = 'Find';

        commonTopNavLinkSubmit.className = 'common-top-nav-link';
        commonTopNavLinkSubmit.href = '/subpage/submit.html';
        commonTopNavLinkSubmit.textContent = 'Request';

        commonTopNavLinkAbout.className = 'common-top-nav-link';
        commonTopNavLinkAbout.href = '/subpage/about.html';
        commonTopNavLinkAbout.textContent = 'About';


        // Nest Logo on Holder
        commonHeaderLogoHolder.append(commonHeaderLogo);

        // Nest holder on Bar - 1st element
        commonTopBar.append(commonHeaderLogoHolder);

        // Nest Home, Search, Submit, About on bar in order placed.
        commonTopBar.append(commonTopNavLinkHome, commonTopNavLinkSearch, commonTopNavLinkSubmit, commonTopNavLinkAbout);

        // Nest top bar into common header.
        commonHeader.append(commonTopBar);

        this.appendChild(commonHeader);

        commonHeaderLogo.addEventListener('click', returnHome);
    }
}

function returnHome() {
        window.location.href = '/index.html';
}

class CommonFooter extends HTMLElement {
    connectedCallback() {
        
        const commonFooter = document.createElement('footer');
        const footerAbout = document.createElement('a');
        const footerContact = document.createElement('a');
        const footerSubmit = document.createElement('a');
        const footerReport = document.createElement('a');

        commonFooter.className = 'main-footer';

        footerAbout.className = 'footer-link';
        footerAbout.textContent = 'About';
        footerAbout.href = '/subpage/about.html';

        footerContact.className = 'footer-link';
        footerContact.textContent = 'Contact';
        footerContact.href = '/subpage/contact.html';

        footerSubmit.className = 'footer-link';
        footerSubmit.textContent = 'Request Addition';
        footerSubmit.href = '/subpage/submit.html';

        // footerReport.className = 'footer-link';
        // footerReport.textContent = 'Report Listing';
        // footerReport.href = '/subpage/report.html';
        
        commonFooter.append(footerAbout, footerContact, footerSubmit, footerReport);

        this.append(commonFooter);
    }
}

customElements.define('common-header', CommonHeader);
customElements.define('common-footer', CommonFooter);
function onload() {
    window.scrollTo(0, 0);
    let headerMain = `
    <div id="nav-imgs">
        <img onclick="window.location.href = 'index.html';" id="nav-logo" src="assets/media/logos/diphda_name.svg">
        <img onclick="mobileMenu()" id="nav-menu-img" src="assets/media/icons/navmenu.svg">
    </div>
    <div id="nav-links">
        <a onclick="window.location.href = 'about.html';">About</a>
        <a onclick="window.location.href = 'store.html';">Store</a>
        <a onclick="window.open('https://givebutter.com/diphdamedical', '_blank');">Donate</a>
        <a onclick="openContact()" class="contact">Contact</a>
    </div>
    `;

    document.getElementById("navbar").innerHTML = headerMain;
    let footerMain = `
    <div id="footer-left">
        <img id="footer-logo" src="assets/media/logos/diphda_full.svg">
        <h3>DIPHDA MEDICAL CO.</h3>
    </div>
    <div id="footer-contact">
        <a onclick="openContact()" id="footer-contact-button">Contact Us</a>
        <p id="emails">keagan.beeravolu@diphdamedical.org<br></br>pranav.ramanathan@diphdamedical.org</p>
    </div>
    `;
    document.getElementById("footer").innerHTML = footerMain;
    let contact = `
    <div id="contact-overlay">
        <button id="close-contact" onclick="closeContact()">
            <img src="assets/media/icons/close.svg"></img>
        </button>
        <p class="contact-title">Contact Us</p>
        <div id="contact-container">
            <div class="contact-option">
                <img src="assets/media/icons/email.svg"></img>
                <p class="contact-subtitle">Email Us</p>
                <p>keagan.beeravolu@diphdamedical.org<br>pranav.ramanathan@diphdamedical.org</p>
            </div>
        </div>
    </div>
    `;
    document.getElementById("contact").innerHTML = contact;
}

function mobileMenu() {
    const nav_links = document.getElementById("nav-links");
    console.log(nav_links.style.display)
    if (nav_links.style.display=="flex"){
        nav_links.style.display="none";
    }
    else{
        nav_links.style.display="flex";
    }
    
}

function openContact() {
    const contact = document.getElementById("contact");
    contact.style.display = "inline";
}

function closeContact() {
    const contact = document.getElementById("contact");
    contact.style.display = "none";
}
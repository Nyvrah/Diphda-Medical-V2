function onload() {
    window.scrollTo(0, 0);
    let headerMain = `
    <nav>
        <div id="menu">
            <div id="menucontent">
                <img id="logo-header" src="./assets/imgs/logo.svg"></img>
                <button id="menubutton" onclick="openmenu()">></button>
            </div>
            <div id="header-main">
                <li onclick="window.location.href = 'index.html';" class="menu-link" id="homeb">Home</li>
                <li onclick="window.location.href = 'about.html';" class="menu-link" id="aboutb">About Us</li>
                <li onclick="window.location.href = 'store.html';" class="menu-link" id="storeb">Web Store</li>
                <li onclick="window.location.href = 'sponsors.html';" class="menu-link" id="sponsorsb">Sponsors</li>
                <li onclick="window.location.href = 'https://givebutter.com/diphdamedical';" class="menu-link" id="donateb">Donate</li>
                
            </div>
            <div id="menu-right">
                <li onclick="openContact()" class="button-container", id="contactb">Contact Us</li>
            </div>
            <script async src="universal.js"></script> 
        </div>
    </nav>
    `;

    document.getElementById("menu-main").innerHTML = headerMain;
    let footerMain = `
    <div class="footer-container">
        <div class="footer">
            <div class="footer-left">
                <img id="logo-footer" src="./assets/imgs/logo.svg"></img>
            </div>
            <div class="footer-right">
                <li onclick="openContact()" id="footer-title">Contact Us</li>
                <p id="footer-contact">keagan.beeravolu@diphdamedical.org<br></br>pranav.ramanathan@diphdamedical.org</p>
            </div>
        </div>
    </div>
    `;
    document.getElementById("footer-main").innerHTML = footerMain;
    let contact = `
    <div id="contact-overlay">
        <button id="close-contact" onclick="closeContact()">
            <img src="./assets/imgs/close.svg"></img>
        </button>
        <p class="contact-title">Contact Us</p>
        <div id="contact-container">
            <div class="contact-option">
                <img src="assets/imgs/email.svg"></img>
                <p class="contact-subtitle">Email Us</p>
                <p>keagan.beeravolu@diphdamedical.org<br></br>pranav.ramanathan@diphdamedical.org</p>
            </div>
        </div>
    </div>
    `;
    document.getElementById("contact").innerHTML = contact;

}

const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    var yScroll = value/vh;
    if (yScroll > 0){
        document.querySelector("#menu").style.marginTop = "0px";
        document.querySelector("#menu").style.background = "#BFE9E1";
    }
    else {
        document.querySelector("#menu").style.marginTop = "40px";
        document.querySelector("#menu").style.background = "";
    }
})

function openContact() {
    document.getElementById("contact").style.display = "block";
}

function closeContact() {
    document.getElementById("contact").style.display = "none";
}
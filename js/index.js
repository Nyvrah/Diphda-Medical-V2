class Section extends HTMLElement  {
    constructor(){
        super();
        this.contents=[
            ["Health Literacy and<br>Language Barriers",
            "Racial and<br>Ethnic Disparities",
            "Gender and<br>Sexual Identity",
            "<h2>10,000+</h2><h3>Individuals reached worldwide"
            ],
            ["Application",
            "Web Store",
            "Partnership",
            "<h2>600+ Individuals</h2><h3>Connected with medical professionals</h3>"
            ]
        ];
    }
    connectedCallback() {
        var order = this.getAttribute("order");
        var type = this.getAttribute("type");
        switch (type){
            case '0':
                this.title="Equitable<br><b>Community Health</b>";
                this.text="Our organization aims to work with local organizations and hospitals to provide services that lessen the disparity in accessible health care in underserved communities"
                this.img="img1";
                this.content=this.contents[0];
                break;
            case '1':
                this.title="Accessible<br><b>Medical Equipment and Treatments</b>";
                this.text="Our organization will feature a website that will serve as a central hub for information on our current projects and also function as a webstore for our low-price medical supplies (includes equipment and OTC drugs)."
                this.img="img2";
                this.content=this.contents[1];
                break;
        }

        this.innerHTML+=`<div class="section-card"></div>`;
        if (order=="0"){
            this.addText();
            this.addImg();
        }
        else {
            this.addImg();
            this.addText();
        }
    }

    addText() {
        this.firstChild.innerHTML+=
        `
        <div class="w50">
            <h2 class="title">${this.title}</h2>
            <p>${this.text}</p>
            <div class="divider"></div>
            <div class="grid">
                <div class="box center">
                    <h3>${this.content[0]}</h3>
                </div>
                <div class="box center">
                    <h3>${this.content[1]}</h3>
                </div>
                <div class="box center">
                    <h3>${this.content[2]}</h3>
                </div>
                <div class="box button" id="read-more">
                    <h3>READ MORE</h3>
                </div>
            </div>
        </div>
        `;
    }
    addImg() {
        this.firstChild.innerHTML+=
        `
        <div class="statistic w40">
            <div class="statistic-img" id="${this.img}"></div>
            <div class="statistic-text">
                <div>${this.content[3]}</div>
            </div>
        </div>
        `
    }
}

function addCustomElement(){
    customElements.define("section-card",  Section);
}
   
addCustomElement()
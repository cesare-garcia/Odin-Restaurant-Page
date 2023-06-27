const loadContactTab = (infoDiv, contactimg1, contactimg2) => {

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");

    const contactHeading = document.createElement("h1");
    contactHeading.classList.add("contactHeading");
    contactHeading.innerText = "Owners - Contact Us";

    const owner1div = document.createElement("div");
    owner1div.classList.add("ownerDiv")
    
    const owner1pic = new Image(200, 200);
    owner1pic.src = contactimg1;

    const owner1bio = document.createElement("p");
    owner1bio.classList.add("ownerbios");
    owner1bio.innerText = `Name: CZ-8743
    Number: xds-4534-09-98d
    Extranet address: cz@mdc_xds.net`;

    const owner2div = document.createElement("div");
    owner2div.classList.add("ownerDiv")

    const owner2pic = new Image(200, 200);
    owner2pic.src = contactimg2;

    const owner2bio = document.createElement("p");
    owner2bio.classList.add("ownerbios");
    owner2bio.innerText = `Name: ZG-2154
    Number: xds-6874-12-44s
    Extranet address: zg@mdc_xds.net`;

    infoDiv.appendChild(contactDiv);
    
    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(owner1div);
    owner1div.appendChild(owner1pic);
    owner1div.appendChild(owner1bio);

    contactDiv.appendChild(owner2div);
    owner2div.appendChild(owner2pic);
    owner2div.appendChild(owner2bio);
};

export default loadContactTab;

const loadPage = (contentDiv) => {

    const topDiv = document.createElement("div");
    topDiv.classList.add("topDiv")

    const topTab1 = document.createElement("div");
    topTab1.classList.add("topTab");
    topTab1.setAttribute("id","tab1")

    const topTab1P = document.createElement("p");
    topTab1P.innerText = "Home";

    const topTab2 = document.createElement("div");
    topTab2.classList.add("topTab");
    topTab2.setAttribute("id","tab2")

    const topTab2P = document.createElement("p");
    topTab2P.innerText = "Menu";

    const topTab3 = document.createElement("div");
    topTab3.classList.add("topTab");
    topTab3.setAttribute("id","tab3")

    const topTab3P = document.createElement("p");
    topTab3P.innerText = "Contact";

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottomDiv")

    contentDiv.appendChild(topDiv);
    topDiv.appendChild(topTab1);
    topTab1.appendChild(topTab1P)
    topDiv.appendChild(topTab2);
    topTab2.appendChild(topTab2P)
    topDiv.appendChild(topTab3);
    topTab3.appendChild(topTab3P)

    contentDiv.appendChild(bodyDiv);
    bodyDiv.appendChild(infoDiv);
    contentDiv.appendChild(bottomDiv);

};

export default loadPage;
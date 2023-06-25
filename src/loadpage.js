
const loadPage = (contentDiv) => {

    const topDiv = document.createElement("div");
    topDiv.classList.add("topDiv")

    const topTab1 = document.createElement("div");
    topTab1.classList.add("topTab");
    topTab1.setAttribute("id","tab1")
    const topTab2 = document.createElement("div");
    topTab2.classList.add("topTab");
    topTab2.setAttribute("id","tab2")
    const topTab3 = document.createElement("div");
    topTab3.classList.add("topTab");
    topTab3.setAttribute("id","tab3")

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("bodyDiv");

    const middleDiv = document.createElement("div");
    middleDiv.classList.add("middleDiv")

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottomDiv")

    contentDiv.appendChild(topDiv);
    topDiv.appendChild(topTab1);
    topDiv.appendChild(topTab2);
    topDiv.appendChild(topTab3);
    contentDiv.appendChild(bodyDiv);
    bodyDiv.appendChild(middleDiv);
    contentDiv.appendChild(bottomDiv);

};

export default loadPage;
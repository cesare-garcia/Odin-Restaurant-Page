import './style.css';
import TheMartianDiningClub from './../img/theMartianDiningClub.png';
import GalacticMap from './../img/GalacticMap.png';
import AndroidMale from './../img/AndroidMale.png';
import AndroidFemale from './../img/AndroidFemale.png';
import marslux1 from './../img/marslux1.png';
import marslux2 from './../img/marslux2.png';
import marslux3 from './../img/marslux3.png';
import marslux4 from './../img/marslux4.png';
import marslux5 from './../img/marslux5.png';
import loadPage from './loadpage.js';
import loadHomeTab from './loadHomeTab.js';
import loadContactTab from './loadContactTab.js';
import loadMenuTab from './loadMenuTab.js';

const contentDiv = document.querySelector("#content");
const mdcURL = TheMartianDiningClub;
const contactMaleIMG = AndroidMale;
const contactFemaleIMG = AndroidFemale;
const marsluxurymeal1 = marslux1;
const marsluxurymeal2 = marslux2;
const marsluxurymeal3 = marslux3;
const marsluxurymeal4 = marslux4;
const marsluxurymeal5 = marslux5;

loadPage(contentDiv);
const infoDiv = document.querySelector(".infoDiv");
loadHomeTab(infoDiv, mdcURL);

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

tab1.addEventListener("click", (e) => {
    if ( infoDiv.children.length > 0 ) {
        let removedDiv = infoDiv.firstChild;
        infoDiv.removeChild(removedDiv);
        loadHomeTab(infoDiv, mdcURL);
    } else {
        loadHomeTab(infoDiv, mdcURL);
    }
})

tab2.addEventListener("click", (e) => {
    if ( infoDiv.children.length > 0 ) {
        let removedDiv = infoDiv.firstChild;
        infoDiv.removeChild(removedDiv);
        loadMenuTab(infoDiv, marsluxurymeal1, marsluxurymeal2, marsluxurymeal3, marsluxurymeal4, marsluxurymeal5);
    }
})

tab3.addEventListener("click", (e) => {
    if ( infoDiv.children.length > 0 ) {
        let removedDiv = infoDiv.firstChild;
        infoDiv.removeChild(removedDiv);
        loadContactTab(infoDiv, contactMaleIMG, contactFemaleIMG);
    }
})
import './style.css';
import TheMartianDiningClub from './../img/theMartianDiningClub.png';
import GalacticMap from './../img/GalacticMap.png';
import loadPage from './loadpage.js';
import loadHomeTab from './loadHomeTab.js';


const contentDiv = document.querySelector("#content");
const mdcURL = TheMartianDiningClub;

console.log(mdcURL);

loadPage(contentDiv);
loadHomeTab(mdcURL);

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

tab1.addEventListener("click", (e) => {
    loadHomeTab(mdcURL);
})

tab2.addEventListener("click", (e) => {
    console.log("tab2")
})

tab3.addEventListener("click", (e) => {
    console.log("tab3")
})
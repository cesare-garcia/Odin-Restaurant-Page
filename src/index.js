import './style.css';
import loadPage from './loadpage.js';
import TheMartianDiningClub from './../img/theMartianDiningClub.png';

const contentDiv = document.querySelector("#content");

loadPage(contentDiv);

const tab1 = document.querySelector("#tab1");
const tab2 = document.querySelector("#tab2");
const tab3 = document.querySelector("#tab3");

tab1.addEventListener("click", (e) => {
    console.log("tab1")
})

tab2.addEventListener("click", (e) => {
    console.log("tab2")
})

tab3.addEventListener("click", (e) => {
    console.log("tab3")
})
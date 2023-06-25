import './style.css';
import TheMartianDiningClub from './../img/theMartianDiningClub.png';

console.log("hello test");

let content = document.querySelector("#content");
let testDiv = document.createElement("div");
testDiv.innerText = "hello";
content.appendChild(testDiv);

let mdcPic = new Image();
mdcPic.src = TheMartianDiningClub;

content.appendChild(mdcPic);
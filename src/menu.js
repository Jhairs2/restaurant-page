import homePageMod from "./home.js";


const content = document.querySelector("#content");
const containerWipe = document.createElement("div");
containerWipe.classList.add("wipe");


 export function createMenuPage() {
    return content.appendChild(containerWipe);
 }


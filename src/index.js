import homePageMod from "./home.js";
import menuPageMod from "./menu.js";
import aboutPageMod from "./about.js";
import './styles/styles.css';

// Add Pages
homePageMod().createHomePage();
menuPageMod().createMenu();
aboutPageMod().createAboutPage();

// Tab switching interactivity
const tabContent = document.querySelectorAll('[data-tab]');
const tabs = document.querySelectorAll("[data-target]");


console.log(tabContent)

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


console.log("this is working");
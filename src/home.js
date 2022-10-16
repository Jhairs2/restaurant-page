// import relevant packages
import { loremIpsum } from "lorem-ipsum";
import image1 from './icons/cart.svg';
import image2 from './icons/magnify(1).svg';
import image3 from './icons/account(1).svg';


// Create homePage Module
const homePageMod = (() => {
    const content = document.querySelector("#content");


    // Making header title, links, and buttons
    const makeHeaderTitle = () => {
        const headerTitle = document.createElement("span");
        headerTitle.textContent = "Waffle World";

        return headerTitle;
    }

    const makeHeaderLinks = () => {
        const tabList = document.createElement("ul");
        tabList.classList.add("tab-container");

        const tab1 = document.createElement('li');
        const tab2 = document.createElement('li');
        const tab3 = document.createElement('li');

        tab1.textContent = "Home";
        tab1.setAttribute('data-target', '#Home');
        tab2.textContent = "Menu";
        tab2.setAttribute('data-target', '#Menu');
        tab3.textContent = "About";
        tab3.setAttribute('data-target', '#About');
        tabList.append(tab1, tab2, tab3);

        return tabList;
    }


    const makeHeaderIconsAndButton = () => {
        const iconContainer = document.createElement("div");

        const headerImage1 = document.createElement("img");
        const headerImage2 = document.createElement("img");
        const headerImage3 = document.createElement("img");
        const headerButton = document.createElement("button");

        iconContainer.classList.add("icon-container");

        headerImage1.classList.add("header-icon");
        headerImage1.src = image3;

        headerImage2.classList.add("header-icon");
        headerImage2.src = image1;

        headerImage3.classList.add("header-icon");
        headerImage3.src = image2;

        headerButton.classList.add("header-button");
        headerButton.textContent = "Order Online";

        iconContainer.append(headerImage1, headerImage2, headerImage3, headerButton);

        return iconContainer;

    }

    // Create header
    const makeHeader = () => {
        const header = document.createElement("header");
        header.classList.add("header-container");
        header.append(makeHeaderTitle(), makeHeaderLinks(), makeHeaderIconsAndButton());

        return header;
    }

    // create body content for homepage
    const makeBodyContent = () => {
        const bodyContainer = document.createElement("div");
        const bodyTitle = document.createElement("h2");
        const bodyDescription = document.createElement("p");
        const bodyButton = document.createElement("button");

        bodyContainer.setAttribute('data-tab', 1);
        bodyContainer.classList.add("active");
        bodyContainer.setAttribute("id", "Home");
        bodyTitle.setAttribute("id", "body-title");
        bodyDescription.classList.add("body-description");
        bodyButton.classList.add("body-button");

        bodyTitle.textContent = "Best Waffle Restaurant";
        bodyDescription.textContent = loremIpsum({ count: 3 });
        bodyButton.textContent = "Order Now";

        bodyContainer.append(bodyTitle, bodyDescription, bodyButton);

        return bodyContainer;
    }

    // CXreate homepage
    function createHomePage() {

        return content.append(makeHeader(), makeBodyContent());
    }

    return { createHomePage };
})

export default homePageMod;
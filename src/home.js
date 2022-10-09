// import relevant packages
import { loremIpsum } from "lorem-ipsum";


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
        tab2.textContent = "Menu";
        tab3.textContent = "About";
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
        headerImage1.src = '../src/icons/account(1).svg';
        headerImage1.style.height = "2rem";

        headerImage2.classList.add("header-icon");
        headerImage2.src = '../src/icons/cart.svg';
        headerImage2.style.height = "2rem";

        headerImage3.classList.add("header-icon");
        headerImage3.src = '../src/icons/magnify(1).svg';
        headerImage3.style.height = "2rem";

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

        bodyContainer.classList.add("body-home-container");
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

const homePageMod = (() => {
    const content = document.querySelector("#content");

    function makeHeader() {
        const header = document.createElement("header");
        header.classList.add("header-container");
        header.append(makeHeaderLinksAndTitle().headerTitle, makeHeaderLinksAndTitle().tabList, makeHeaderIconsAndButton());

        return header;
    }


    const makeHeaderLinksAndTitle = () => {
        const headerTitle = document.createElement("span");
        headerTitle.textContent = "Waffle World";

        const tabList = document.createElement("ul");
        tabList.classList.add("tab-container");

        const tab1 = document.createElement('li');
        const tab2 = document.createElement('li');
        const tab3 = document.createElement('li');

        tab1.textContent = "Home";
        tab2.textContent = "Menu";
        tab3.textContent = "About";
        tabList.append(tab1, tab2, tab3);

        return { headerTitle, tabList }
    }


    const makeHeaderIconsAndButton = () => {
        const iconContainer = document.createElement("div");

        const headerImage1 = document.createElement("img");
        const headerImage2 = document.createElement("img");
        const headerImage3 = document.createElement("img");
        const headerButton = document.createElement("button");

        iconContainer.classList.add("icon-container");
        headerImage1.classList.add("header-icon");
        headerImage2.classList.add("header-icon");
        headerImage3.classList.add("header-icon");
        headerButton.classList.add("header-button");

        headerButton.textContent = "Order Online";

        iconContainer.append(headerImage1, headerImage2, headerImage3, headerButton);

        return iconContainer;

    }


    function createHomePage() {

        return content.append(makeHeader());
    }

    return { createHomePage };
})

export default homePageMod;
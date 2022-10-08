
export const homePageMod = (() => {
    const content = document.querySelector("#content");

    function makeHeader() {
        const header = document.createElement("header");
        header.classList.add("header-container");
        return header
    }

    function addHeaderContent() {

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

        return makeHeader().append(headerTitle, tabList);
    }

    function createHomePage() {
        return content.append(addHeaderContent);
    }
})
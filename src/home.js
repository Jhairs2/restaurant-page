
import Icon from './waffle.jpg';

const homePage = (function () {

    const addHeader = function () {
        const header = document.createElement("h1");
        header.textContent = "Waffle World";
        header.classList.add("home-title");
        return header;
    };

    const addImage = function () {
        const img = document.createElement("img");
        img.src = Icon;
        img.classList.add("home-image");
        return img;
    };

    const addDescription = function () {
        const p = document.createElement("p");
        p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestiae hic eius incidunt assumenda consequatur quod dolorum aliquam modi aspernatur expedita, repellendus rem ad laudantium, non illum vero dolor dolorem!";
        p.classList.add("home-description");
        return p;
    };

    const formHomePage = function () {
        const homeContent = document.querySelector("#content");
        const container = document.createElement("div");
        container.classList.add("home-container");
        container.append(addHeader(), addImage(), addDescription());
        return homeContent.append(container);
    };

    return { formHomePage };
});

export default homePage; 
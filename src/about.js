// import relevant packages
import { loremIpsum } from "lorem-ipsum";


// Create about page
const aboutPageMod = (() => {

    // Create variables to be used for sections
    const content = document.querySelector("#content");
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('data-tab', 3);
    bodyContainer.setAttribute("id", "About");


    // About section
    const createAboutSection = () => {
        const aboutContainer = document.createElement('div');
        const aboutTitle = document.createElement('h1');
        const aboutText = document.createElement('p');

        aboutContainer.classList.add('about-container');

        aboutTitle.textContent = "About Us";
        aboutText.textContent = loremIpsum({ count: 8 });

        aboutContainer.append(aboutTitle, aboutText);

        return aboutContainer;
    }

    // Location and business info sectin
    const createLocationSection = () => {
        const locationContainer = document.createElement('div');
        const locationInfoContainer = document.createElement('div');
        const locationInfo1 = document.createElement('p');
        const locationInfo2 = document.createElement('p');
        const locationInfo3 = document.createElement('p');
        const mapContainer = document.createElement('div');
        const mapTitle = document.createElement('h1');
        const map = document.createElement('iframe');

        locationContainer.classList.add('location-container');
        locationInfoContainer.classList.add('location-info-container');
        mapContainer.classList.add('map-container');

        // Map creation
        map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88559.1067584717!2d-104.8630321617521!3d38.86949427843607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e6d22b%3A0x418eeb92f5e86b13!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1665878180693!5m2!1sen!2sus';
        map.width = '600';
        map.height = '450';
        map.style.border = '0';
        map.allowFullScreen = '';
        map.loading = 'lazy';
        map.referrerPolicy = "no-referrer-when-downgrade";

        locationInfo1.textContent = 'Business Hours';
        locationInfo2.textContent = 'Monday - Friday';
        locationInfo3.textContent = '9:00AM - 5:00PM';
        mapTitle.textContent = "Location";

        mapContainer.append(mapTitle, map);
        locationInfoContainer.append(locationInfo1, locationInfo2, locationInfo3);
        locationContainer.append(locationInfoContainer, mapContainer);


        return locationContainer;
    }

    // Create Page
    const createAboutPage = () => {
        bodyContainer.append(createAboutSection(), createLocationSection());

        return content.append(bodyContainer);
    }

    return { createAboutPage };

})

export default aboutPageMod;
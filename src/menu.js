
// Create Menu Page
const menuPageMod = (() => {
   const content = document.querySelector("#content");
   const bodyContainer = document.createElement('div');
   bodyContainer.setAttribute('data-tab', 2);
   bodyContainer.setAttribute("id", "Menu");


   // Create Items on Menu
   const createMenuItems = () => {
      const menuContainer = document.createElement('div');
      const menuItemCard = [];

      // Loop through and create cards for menu items
      for (let i = 0; i < 6; i++) {

         const menuItemPic = document.createElement('img');
         const menuItemInfo = document.createElement('p')
         menuItemCard.push(document.createElement('div'));
         menuItemCard[i].classList.add(`card`);
         menuItemCard[i].classList.add(`${i}`);
         menuItemCard[i].append(menuItemPic, menuItemInfo);
         menuContainer.append(menuItemCard[i]);

      }

      // Menu items 
      menuItemCard[0].firstChild.src = '../src/icons/waffles.png';
      menuItemCard[0].lastChild.textContent = "Belgian Waffles";

      menuItemCard[1].firstChild.src = `../src/icons/waffleButter.png`;
      menuItemCard[1].lastChild.textContent = 'Waffle with butter';

      menuItemCard[2].firstChild.src = `../src/icons/waffles-no-butter.png`;
      menuItemCard[2].lastChild.textContent = 'Waffle w/o butter';

      menuItemCard[3].firstChild.src = `../src/icons/waffeStrawberry.png`;
      menuItemCard[3].lastChild.textContent = 'Strawberry Waffles';

      menuItemCard[4].firstChild.src = `../src/icons/waffle-cup-ice-cream.png`
      menuItemCard[4].lastChild.textContent = 'Ice Cream Waffle Cup';

      menuItemCard[5].firstChild.src = `../src/icons/blueWaffle.png`;
      menuItemCard[5].lastChild.textContent = 'Blue Waffles';

      menuContainer.classList.add('menu-container');

      bodyContainer.append(menuContainer)
      return bodyContainer;
   }

   // Create Page
   const createMenu = () => {
      return content.append(createMenuItems());
   }

   return { createMenu };
})


export default menuPageMod;
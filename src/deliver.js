import {menuPageLoad} from './menu.js';

function deliverPageLoad(contentDiv) {
    const textSection = () => {
        const containerDiv = document.createElement('div');
        containerDiv.className = 'text-section-container';

        const menuSection = () => {
            const menuDiv = document.createElement('div');
            menuDiv.className = 'menu-container';
            /* const menu = menuPageLoad(menuDiv);
            menuDiv.appendChild(menu); */
            menuDiv.appendChild(menuPageLoad());
            
            return menuDiv;
        }
        containerDiv.appendChild(menuSection(containerDiv));
        return containerDiv;
    }
    contentDiv.appendChild(textSection());

}

export { deliverPageLoad };
import "./style.css";
import {homeLoad} from './home.js';

console.log("Hello");

const contentDiv = document.getElementById('content');
homeLoad(contentDiv);

function navButtonClick(buttonClicked) {
    // Clear page and handle which button was clicked

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    switch (buttonClicked) {
        case 'homeButton':
            homeLoad(contentDiv);
            break;
        case 'menuButton':
            //menuPageLoad();
            break;
        case 'orderButton':
            //menuPageLoad();
            break;
        case 'locationsButton':
            // blank page
            break;
        case 'aboutButton':
            //aboutPageLoad();
            break;
    } // end switch statement
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
   btn.addEventListener('click', event => {
        navButtonClick( event.target.id );
   });
});
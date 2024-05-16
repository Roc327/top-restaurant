import "./style.css";
import {homeLoad} from './home2.js';

console.log("Hello");

function navButtonClick(buttonClicked) {
    // Clear page and handle which button was clicked

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    switch (buttonClicked) {
        case 'homeButton':
            //homeLoad();
            alert(buttonClicked);
            window.location.reload(); //testing content reload after alert
            break;
        case 'menuButton':
            //menuPageLoad();
            alert(buttonClicked);
            break;
        case 'orderButton':
            //menuPageLoad();
            alert(buttonClicked);
        case 'cateringButton':
            // blank page
            break;
        case 'locationsButton':
            alert(buttonClicked);
            // blank page
            break;
        case 'aboutButton':
            alert(buttonClicked);
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
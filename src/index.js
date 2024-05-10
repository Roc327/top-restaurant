import "./style.css";
import {homeLoad} from './home2.js';

console.log("Hello");

function navButtonClick(buttonClicked) {
    // Clear page and handle which button was clicked

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    switch (buttonClicked) {
        case 'home':
            homeLoad();
            break;
        case 'menu':
            menuPageLoad();
            break;
        case 'order':
            menuPageLoad();
        case 'catering':
            // blank page
            break;
        case 'offers':
            // blank page
            break;
        case 'locations':
            // blank page
            break;
        case 'about':
            aboutPageLoad();
            break;
    } // end switch statement
}

function buttonTest(clickedId) {
    alert(clickedId);
}
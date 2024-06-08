import "./style.css";
import { homeLoad } from "./home.js";
import { menuPageLoad } from "./menuPage.js";
import { constructPageLoad } from "./constructPage.js";

console.log("Hello");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    navButtonClick(event.target.id);
  });
});

const contentDiv = document.getElementById("content");
homeLoad(contentDiv);

function navButtonClick(buttonClicked) {
  // Clear page and handle which button was clicked

  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  switch (buttonClicked) {
    case "homeButton":
      homeLoad(contentDiv);
      break;
    case "menuButton":
      menuPageLoad(contentDiv);
      break;
    case "orderButton":
      constructPageLoad(contentDiv);
      break;
    case "locationsButton":
      constructPageLoad(contentDiv);
      break;
    case "aboutButton":
      constructPageLoad(contentDiv);
      break;
  } // end switch statement
}

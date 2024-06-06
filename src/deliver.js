import { menuPageLoad } from "./menuPage.js";

function deliverPageLoad(contentDiv) {
  const textSection = () => {
    const containerDiv = document.createElement("div");
    containerDiv.className = "text-section-container";

    const menuDiv = menuPageLoad();
    containerDiv.appendChild(menuDiv);

    return containerDiv;
  };
  contentDiv.appendChild(textSection());
}

export { deliverPageLoad };

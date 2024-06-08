function constructPageLoad(contentDiv) {
  const constPageDiv = document.createElement("div");
  constPageDiv.id = "construction-div";

  const leftCard = document.createElement("div");
  leftCard.id = "left-card";
  leftCard.innerHTML =
    "The page you are currently trying to reach is under construction.";

  const rightCard = document.createElement("div");
  rightCard.id = "right-card";
  rightCard.innerHTML =
    "Please check back later and this page just be ready for you!";

  constPageDiv.appendChild(leftCard);
  constPageDiv.appendChild(rightCard);

  contentDiv.appendChild(constPageDiv);
}

export { constructPageLoad };

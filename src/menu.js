function menuPageLoad(contentDiv) {
  const containerDiv = document.createElement("div");
  containerDiv.id = "menu-container";

  const createItems = (name, price) => {
    const itemsDiv = document.createElement("div");
    itemsDiv.className = "items";

    const itemNameDiv = document.createElement("div");
    itemNameDiv.className = "item-name";
    itemNameDiv.innerHTML = name;

    const dottedLineDiv = document.createElement("div");
    dottedLineDiv.className = "dotted-line";
    const lineDot = "-";
    dottedLineDiv.innerHTML = lineDot.repeat(100);

    const priceDiv = document.createElement("div");
    priceDiv.className = "price";
    priceDiv.innerHTML = price;

    itemsDiv.appendChild(itemNameDiv);
    itemsDiv.appendChild(dottedLineDiv);
    itemsDiv.appendChild(priceDiv);

    return itemsDiv;
  };

  const menuTitleDiv = document.createElement("div");
  menuTitleDiv.id = "menu-title";
  menuTitleDiv.innerHTML = "Our Menu!";
  containerDiv.appendChild(menuTitleDiv);

  const menuContentDiv = document.createElement("div");
  menuContentDiv.id = "menu-contents";

  menuContentDiv.appendChild(createItems("Burrito", "$12.99"));
  menuContentDiv.appendChild(createItems("Burger", "$14.99"));
  menuContentDiv.appendChild(createItems("Nachos", "$5.99"));
  menuContentDiv.appendChild(createItems("Fries", "$6.99"));
  menuContentDiv.appendChild(createItems("Soda", "$3.99"));

  containerDiv.appendChild(menuContentDiv);

  contentDiv.appendChild(containerDiv);

  //return containerDiv;
}

export { menuPageLoad };

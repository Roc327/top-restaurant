function menuPageLoad(contentDiv) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'menu-container';

    const createTestFunc = () => {
        const testDiv = document.createElement('div');
        testDiv.className = 'test';
        testDiv.innerHTML = 'Hello Menu!';
        console.log('You are in "createTestFunc" in "menu.js"!');

        return testDiv;
    }
    containerDiv.appendChild(createTestFunc());
    //contentDiv.appendChild(containerDiv);
    return containerDiv;
}

export { menuPageLoad };

function menuPageLoad(contentDiv) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'menu-container';

    const createTestFunc = () => {
        const testDiv = document.createElement('div');
        testDiv.className = 'test';
        testDiv.innerHTML = 'Hello Menu!';

        return testDiv;
    }
    containerDiv.appendChild(createTestFunc());
    contentDiv.appendChild(containerDiv);
}

export { menuPageLoad };
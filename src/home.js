import DinnerImg from './dinner-2024.jpg';

const contentDiv = document.getElementById('content');

function imgSection() {
    const imgDiv = document.createElement('div');
    imgDiv.id = 'img-section';

    const imgDinner = new Image();
    imgDinner.src = DinnerImg;

    imgDiv.appendChild(imgDinner);

    return imgDiv;
}

document.contentDiv.appendChild(imgSection());

function infoSection() {
    const infoDiv = document.createElement('div');
    infoDiv.id = 'info-section';

    const deliveryCardDiv = () {
        const createdDiv = document.createElement('div');
        createdDiv.id = 'delivery-card';
        createdDiv.className = 'info-card';

        const textDiv = document.createElement('div');
        textDiv.className = 'card-text';
        createdDiv.appendChild(textDiv);

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'card-button-container';

        const button = createElement('button');
        button.className = 'card-button';
        button.id = 'deliverButton';
        buttonDiv.appendChild(button);

        createdDiv.appendChild(buttonDiv);

        return createdDiv;
    };
    

    infoDiv.appendChild(deliveryCardDiv());

    const menuCardDiv = () {
        const createdDiv = document.createElement('div');
        createdDiv.id = 'menu-card';
        createdDiv.className = 'info-card';

        const textDiv = document.createElement('div');
        textDiv.className = 'card-text';
        createdDiv.appendChild(textDiv);

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'card-button-container';

        const button = createElement('button');
        button.className = 'card-button';
        button.id = 'menuButton';
        buttonDiv.appendChild(button);

        createdDiv.appendChild(buttonDiv);
        
        return createdDiv;
    }

    infoDiv.appendChild(menuCardDiv());

    return infoDiv;
}

document.contentDiv.appendChild(infoSection());
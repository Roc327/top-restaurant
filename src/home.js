import DinnerImg from './dinner-2024.jpg';

function homeLoad(contentDiv) {

    function imgSection() {
        const imgDiv = document.createElement('div');
        imgDiv.id = 'img-section';

        const imgDinner = new Image();
        imgDinner.src = DinnerImg;

        imgDinner.id = 'dinner-img'
        imgDiv.appendChild(imgDinner);

        return imgDiv;
    }

    contentDiv.appendChild(imgSection());

    function infoSection() {
        const infoDiv = document.createElement('div');
        infoDiv.id = 'info-section';

        const infoCardsDiv = document.createElement('div');
        infoCardsDiv.id = 'info-cards';

        const deliveryCardDiv = () => {
            const createdDiv = document.createElement('div');
            createdDiv.id = 'delivery-card';
            createdDiv.className = 'info-card';

            const textDiv = document.createElement('div');
            textDiv.className = 'card-text';
            textDiv.innerHTML = 'Select deliver now to have your favorite dish come directly to you!';
            createdDiv.appendChild(textDiv);
        
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'card-button-container';

            const button = document.createElement('button');
            button.className = 'card-button';
            button.id = 'deliverButton';
            button.innerHTML = 'Deliver';
            buttonDiv.appendChild(button);

            createdDiv.appendChild(buttonDiv);

            return createdDiv;
        };
        

        infoCardsDiv.appendChild(deliveryCardDiv());

        function menuCardDiv() {
            const createdDiv = document.createElement('div');
            createdDiv.id = 'menu-card';
            createdDiv.className = 'info-card';

            const textDiv = document.createElement('div');
            textDiv.className = 'card-text';
            textDiv.innerHTML = 'View the menu to know exactly what we offer and you can get your taste buds ready to come in.'
            createdDiv.appendChild(textDiv);

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'card-button-container';

            const button = document.createElement('button');
            button.className = 'card-button';
            button.id = 'menuButton';
            button.innerHTML = 'Menu';
            buttonDiv.appendChild(button);

            createdDiv.appendChild(buttonDiv);
            
            return createdDiv;
        }

        infoCardsDiv.appendChild(menuCardDiv());
        infoDiv.appendChild(infoCardsDiv);

        return infoDiv;
    }

    function opinionSection() {
        const opinionDiv = document.createElement('div');
        opinionDiv.id = 'opinion-section';

        function opinionHead() {
            const opHead = document.createElement('div');
            opHead.id = 'opinion-head';
            opHead.innerHTML = 'What people are saying!';

            return opHead;
        }

        opinionDiv.appendChild(opinionHead());

        function opinionReviews() {
            const opReviewsDiv = document.createElement('div');
            opReviewsDiv.id = 'opinion-reviews';

            function reviewsCard(text, name, location) {
                const reviewsDiv = document.createElement('div');
                reviewsDiv.className = 'reviews';

                const reviewTextDiv = document.createElement('div');
                reviewTextDiv.className = 'review-text';
                reviewTextDiv.innerHTML = text;
                reviewsDiv.appendChild(reviewTextDiv);

                const revCardCustSig = (name, location) => {
                    const custSigDiv = document.createElement('div');
                    custSigDiv.className = 'cust-sig';

                    const custNameDiv = document.createElement('div');
                    custNameDiv.className = 'cust-name';
                    custNameDiv.innerHTML = name;
                    custSigDiv.appendChild(custNameDiv);

                    const custLocationDiv = document.createElement('div');
                    custLocationDiv.className = 'cust-location';
                    custLocationDiv.innerHTML = location;
                    custSigDiv.appendChild(custLocationDiv);

                    return custSigDiv;
                }

                reviewsDiv.appendChild(revCardCustSig(name, location));

                return reviewsDiv;
            }

            const cust1RevText = "Great food, great service, great relaxed ambience, what more can you ask for?! Been here 3 times, brunch, lunch and dinner. Every dish was good. All servers were friendly and knowledgeable. Each dish is huge, even if you come hungry, you're probably still leaving with take out.";
            const cust1Name = 'Tony';
            const cust1Location = 'Tampa, Fl';
            opReviewsDiv.appendChild(reviewsCard(cust1RevText, cust1Name, cust1Location));

            const cust2RevText = "This is the best and one of the most economical places to go for breakfast or lunch. The service is phenominal and the staff is always happy and cheerful. Food comes out freshly made to your desire in a very efficient manner. One of my all time favorite spots in town.";
            const cust2Name = 'Stephanie';
            const cust2Location = 'Jacksonville, Fl';
            opReviewsDiv.appendChild(reviewsCard(cust2RevText, cust2Name, cust2Location));

            return opReviewsDiv;
        }

        opinionDiv.appendChild(opinionReviews());

        return opinionDiv;        
    }

    contentDiv.appendChild(infoSection());
    contentDiv.appendChild(opinionSection());
}

export { homeLoad };
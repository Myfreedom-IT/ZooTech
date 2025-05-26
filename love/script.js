// Очистка контейнера карточек
document.querySelector('.cards').innerHTML = '';

// Инициализация избранного из localStorage
let lovedCards = JSON.parse(localStorage.love || '[]');

// Функция создания карточек на странице
function createCard(array) {
    array.forEach(element => {
        let createdCard = `
        <div class="card card-${element.id}">
            <button class="love" id="love-${element.id}">
                <img src="./images/red-heart.png" alt="#" id="heart-${element.id}" class="heart-img">
            </button>
            <button class="delete" id="delete-${element.id}">
                <img src="./images/tresh-cart.png" alt="#" class="tresh-cart" id="tresh-cart-${element.id}">
            </button>
            <div class="for-card-photo">
                <img src="${element.src}" alt="#" class="photo">
            </div>
            <div class="for-extra-info">
                <div class="price-rating">
                    <div class="important important-${element.id}">
                        <div class="price">${element.price} BYN</div>
                        <div class="rating rating-${element.id}">
                            <img src="./images/rating-star.png" alt="#">
                        </div>
                        <div class="for-number"><p>${element.cardRating}</p></div>
                    </div>
                </div>
                <div class="titel">${element.titel}</div>
                <div class="description">${element.description}</div>
                <div class="buttons">
                    <div class="summ" id="summ-${element.id}">
                        <button class="minus" id="minus-${element.id}"> - </button>
                        <span class="number number-${element.id}">0</span>
                        <button class="plus" id="plus-${element.id}"> + </button>
                    </div>
                    <button class="buy">Купить</button>
                </div>
            </div>
        </div>`;
        document.querySelector('.cards').innerHTML += createdCard;
    });
}

createCard(lovedCards);

// Обработка нажатий внутри карточек
document.querySelector('.cards').addEventListener('click', (event) => {
    let updated = [...lovedCards];

    updated.forEach((item) => {
        if (event.target.id === `plus-${item.id}`) {
            const numberElement = document.querySelector(`.number-${item.id}`);
            numberElement.textContent = Number(numberElement.textContent) + 1;
        }

        if (event.target.id === `minus-${item.id}`) {
            const numberElement = document.querySelector(`.number-${item.id}`);
            numberElement.textContent = Math.max(0, Number(numberElement.textContent) - 1);
        }

        // Удаление из избранного
        if (event.target.id === `tresh-cart-${item.id}` || event.target.id === `heart-${item.id}`) {
            document.querySelector(`.card-${item.id}`).style.display = 'none';
            updated = updated.filter(card => card.id !== item.id);
            localStorage.love = JSON.stringify(updated);
        }
    });

    lovedCards = updated;
});

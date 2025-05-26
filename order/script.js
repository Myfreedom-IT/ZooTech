const items = [
  {
      "titel": 'Фонтанчик-автопоилка для питомцев "Хрустальный ручей"',
      "description": 'В жаркую погоду очень важно много пить, чтобы не перегреться. Люди могут полакомиться мороженым, освежитья лимонадом, а животные... Фонтанчик "Хрустальный ручей" будет помощником вашим любимым питомцам, который всегда будет готов поделиться живительной влагой.',
      "price": '70',
      "src": '../global-images/for-cards/water-pet-fontain.jpeg',
      "cardRating": '4.6',
      "category": ["dog", "cat"],
  },
  {
      "titel": 'Фонтанчик-автопоилка для питомцев "Живая вода"',
      "description": 'Все мы, люди, тянемся к разнообразию. Животным тоже не хватает чудес в жизни, особенно если они целый день дома. Подарите им капельку разнообразия с автопоилкой "Живая вода". С неё им всегда будет интересно посещать вашу кухню...',
      "price": '75',
      "src": '../global-images/for-cards/drinking-fontain-for-pets.jpg',
      "cardRating": '4.8',
      "category": ["dog", "cat"],
  },
  {
      "titel": 'Фонтанчик-автопоилка для питомцев "Изумрудный прибой"',
      "description": 'Кто не любит ездить на море? А часто вы берёте с собой своих домашних питомцев? Может наши домашние питомцы никогда не увидят моря... Подарите им кусочек моря с автопоилкой-фонтанчиком "Изумрудный прибой".',
      "price": '72',
      "src": '../global-images/for-cards/water-pet-fontain-3.jpeg',
      "cardRating": '4.4',
      "category": ["dog", "cat"],
  }
]

document.getElementById("country").addEventListener("change", function () {
  const country = this.value;
  let countryCode = "";
  let maxLength = 0;

  switch (country) {
    case "belarus":
      countryCode = "+375";
      maxLength = 10;
      break;
    case "russia":
      countryCode = "+7";
      maxLength = 10;
      break;
    case "poland":
      countryCode = "+48";
      maxLength = 10;
      break;
    case "lithuania":
      countryCode = "+370";
      maxLength = 10;
      break;
  }

  const phoneInput = document.getElementById("phone");
  phoneInput.value = countryCode + " ";
  phoneInput.setAttribute("maxlength", countryCode.length + maxLength);

  const extraPhoneInput = document.getElementById("extra-phone");
  extraPhoneInput.value = countryCode + " ";
  extraPhoneInput.setAttribute("maxlength", countryCode.length + maxLength);
});


// function showPaymentDetails(selectedId) {
//   const details = document.querySelectorAll('.payment-details');
//   details.forEach(detail => detail.style.display = 'none');
//   document.getElementById(selectedId).style.display = 'block';
// }




const cardsContainer = document.querySelector('.cards');

items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
 const cardImage = document.createElement('div');
    cardImage.classList.add('cards-image');
 const likeImage = document.createElement('img');
    likeImage.classList.add('like-image');
    likeImage.src = "../catalog/images/recommendations/heart.svg";
 const cardImg = document.createElement('img');
    cardImg.classList.add('card-image');
    cardImg.src = item.image;
 cardImage.appendChild(likeImage);
    cardImage.appendChild(cardImg);
 const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
 const cardRating = document.createElement('div');
    cardRating.classList.add('card-rating');
 for (let i = 0; i < item.rating; i++) {
        const star = document.createElement('img');
        star.src = "../catalog/images/recommendations/star-rating.svg";
        cardRating.appendChild(star);
    }
 const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item.title;
 const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = item.description;
 const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.textContent = item.price;
 cardInfo.appendChild(cardRating);
    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardDescription);
    cardInfo.appendChild(cardPrice);
 card.appendChild(cardImage);
    card.appendChild(cardInfo);
 cardsContainer.appendChild(card);
})

console.log('JavaScript');

/*          <div class="card">
            <div class="card-image">
              <img class="like-image" src="./images/recommendations/heart.svg" alt="like-image">
              <img class="card-image" src="./images/recommendations/Rectangle 1.png" alt="card-image">
            </div>
            <div class="card-info">
              <div class="card-rating">
                <img src="./images/recommendations/star-rating.svg" alt="star">
                <img src="./images/recommendations/star-rating.svg" alt="star">
                <img src="./images/recommendations/star-rating.svg" alt="star">
                <img src="./images/recommendations/star-rating.svg" alt="star">
                <img src="./images/recommendations/star-rating.svg" alt="star">
              </div>
              <h3 class="card-title">Название товара</h3>
              <p class="card-description">Описание товара</p>
              <p class="card-price">Цена</p>
              <button class="card-button">Купить</button>
            </div>
          </div> */
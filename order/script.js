const items = JSON.parse(localStorage.buy || '[]')

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


function showPaymentDetails(selectedId) {
   const details = document.querySelectorAll('.payment-details');
   details.forEach(detail => detail.style.display = 'none');
   document.getElementById(selectedId).style.display = 'block';
}

const cardContainer = document.querySelector('.products');

items.forEach((item) => {
   const card = document.createElement('div');
   card.classList.add('card');
   const cardImage = document.createElement('div');
   cardImage.classList.add('cards-image');
   const likeImage = document.createElement('img');
   likeImage.classList.add('like-image');
   likeImage.image = "../catalog/images/red-heart.png";
   const cardImg = document.createElement('img');
   cardImg.classList.add('card-image');
   let images = item.src
   if (images.includes('../global-images/for-cards/')) {
      cardImg.src = item.src;
   } else {
      cardImg.src = '.' + item.src;
   }
   console.log(item.src)

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
   cardPrice.textContent = item.price + '      BYN';
   cardInfo.appendChild(cardRating);
   cardInfo.appendChild(cardTitle);
   cardInfo.appendChild(cardDescription);
   cardInfo.appendChild(cardPrice);
   card.appendChild(cardImage);
   card.appendChild(cardInfo);
   cardContainer.appendChild(card);
   let num = Number(document.querySelector(`#price`).textContent) + Number(item.price)
   document.querySelector(`#price`).textContent = num;
   let one = Number(document.querySelector(`#price`).textContent);
   let two = Number(document.querySelector('#discount').textContent);
   console.log(one)
   console.log(two)
   let number = one - two;
   document.querySelector(`#total`).textContent = number + '       BYN';
   const realCards = document.querySelectorAll(`.card`)
   localStorage.buy = JSON.stringify(realCards)
})
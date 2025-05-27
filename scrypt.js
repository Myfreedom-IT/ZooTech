const items = [
    {
        "image": './images/black-heart.png',
        "title": 'Тёплая кормушка для птиц "Лучик юга"',
        "description": 'Не для кого не секрет, что многие птицы улетают на юг с приходом осени. А есть птички, которые остаются дома и вынуждены переживать лютый мороз и страшный голод. Давайте поможем им вместе с кормушкой с самообогревом "Уголок юга"',
        "price": '86',
        "src": './global-images/for-cards/warm-bird-feeder-5.jpeg',
        "cardRating": '4.3',
        "category": ["bird"],
        "id": '15',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умная миска-весы для питомца "Мой дорогой тюленьчик"',
        "description": 'Белые медведи, моржи и тюлени запасают жир, чтобы не замёрзнуть в вечных льдах. Но ваш четверолапый друг на Северный или Южный Полюс не собирается и ему, в отличие от жильцов льдов, нужно следить за рационом. Умная миска-весы "Мой маленький тюленьчик" поможет ему в этом.',
        "price": '51',
        "src": './global-images/for-cards/smart-weight-6.jpeg',
        "cardRating": '4.6',
        "category": ["dog", "cat"],
        "id": '28',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный террариум для маленьких рептилий "РептоДом"',
        "description": 'не на каждом углу встретишь правила ухода за экзотическими животными... "РептоДом" - умный террариум для маленьких рептилий с искусственной регуляцией освещения и влажности - ваш лучший друг в этом деле.',
        "price": '110',
        "src": './global-images/for-cards/smart-terrarium-for-very-small-reptiles-4.jpeg',
        "cardRating": '4.4',
        "category": ["unique"],
        "id": '30',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный змеиный трекер "Кобра-Тек"',
        "description": 'Если вам кажется, что ваш питомец заболел, а вы не знаете что делать и куда обратится -  умный змеиный трекер "Кобра-Тек" для вас. Он поможет вам в профилакте заболеваний: даст рекомендации по уходу и проследит за вашей змеёй. Но всё-таки рекомендуем обратится к ветеринару!',
        "price": '138',
        "src": './global-images/for-cards/smart-snake-trecker-2.jpeg',
        "cardRating": '4.2',
        "category": ["unique"],
        "id": '36',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный лабиринт для грызунов "Лабиринт виллы Пизани"',
        "description": 'Ваш грызун невероятно активен, но ему негде разгуляться? Представляем вашему вниманию уникальный умный лабиринт "Лабиринт виллы Пизани". Ваш зверёк никогда не соскучиться: каждый день его будут ждать новые тунели и препятствия, новые испытания, ловушки и двигающиеся проходы!',
        "price": '75',
        "src": './global-images/for-cards/smart-rodent-maze.jpeg',
        "cardRating": '5',
        "category": ["maze"],
        "id": '37',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умная кормушка-весы для грызунов "Кормушка-Толстушка"',
        "description": 'Очень опасно перекармливать любое животное, особенно если это грызун! Зверёк должен хорошо двигаться и здорово питаться. "Кормушка-Толстушка" не даст вам перекормит своего зверька, чтобы он всегда оставался весёлым и ловким.',
        "price": '32',
        "src": './global-images/for-cards/smart-rodent-feeder-1.jpeg',
        "cardRating": '3.9',
        "category": ["maze"],
        "id": '38',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Звонок для двери для питомцев "Динь-Динь-Гав-Мяу"',
        "description": 'У вас нет дверцы для животных в двери, но, вы не хотите, чтобы питомец царапался, так как испортит дорогую вешь? "Динь-Динь-Гав-Мяу" - это умный звнок от двери. Несколько систематических тренировок и ваш питомец будет звонить перед тем, как войти.',
        "price": '41',
        "src": './global-images/for-cards/door-bell-for-animals.jpeg',
        "cardRating": '4.9',
        "category": ["dog", "cat"],
        "id": '108',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный аквариум «Параиба»',
        "description": '«Параиба» - это красивейшие подводные камни, называющиеся так по имени человека, который впервые их нашел. Они имеют насыщенный бирюзовый цвет — часто образно именуемый «цветом воды в бассейне», «электрическим», неоновым. Теперь - это ваш умный аквариум, где рыбкам всегда будет комфортно.',
        "price": '81',
        "src": './global-images/for-cards/smart-aquarium-6.jpeg',
        "cardRating": '4.9',
        "category": ["unique"],
        "id": '68',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умная игрушка для котика "Буль-буль карасики"',
        "description": 'Если вам кажется, что ваш питомец мало двигается и быстро набирает вес, то "Буль-буль карасики" сможет развеселить и заинтересовать его. Она станет незаменимым компаньоном на пути к весёлому и подвижному образу жизни вашего любимца.',
        "price": '11',
        "src": './global-images/for-cards/robo-cat-fish.png',
        "cardRating": '4.1',
        "category": ["cat"],
        "id": '69',
        "numm": '0',
    },

    {
        "image": './images/black-heart.png',
        "title": 'Умная лежанка с самоотоплением "Объятия Эри"',
        "description": 'Озеро Эри – четвертое по площади поверхности озеро из пяти Великих озер. Поскольку озеро – самое мелкое из Великих озер, оно также и самое теплое. Теперь "Объятия Эри" будет самонагреваться в холодную погоду и обогревать вашего любимца.',
        "price": '53',
        "src": './global-images/for-cards/smart-bed.jpg',
        "cardRating": '4.9',
        "category": ["cat", "dog"],
        "id": '77',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный аквариум для черепашек "Морской дворик"',
        "description": 'Готовы поспорить, что в таких условиях, в каких будет жить ваша черепашка, захочется жить и вам самим. В аквариуме "Морской дворик" есть всё: свет, тепло, вода, насыщенная кислородом и еда. Черепашкам будет очень комфортно в вечно чистом домике. ',
        "price": '90',
        "src": './global-images/for-cards/turtle-smart-house-3.jpeg',
        "cardRating": '4.7',
        "category": ["unique"],
        "id": '127',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный домик для белок "Дупло+"',
        "description": 'Белки - очень интересные зверьки: , несмотря на милый внешний вид, в меру агрессивные и подозрительные зверьки. Вместе с тем они довольно умны и хитры. В их новом домике будет место для занятий спортом, отдыха и склад с орехами на зиму.',
        "price": '90',
        "src": './global-images/for-cards/smart-house-for-squirrel.jpeg',
        "cardRating": '5.0',
        "category": ["maze"],
        "id": '140',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Автоматическая мойка для лап "Фланелевые обнимашки"',
        "description": 'Посчитайте питомцев, которые любят мыться. Пальцев на двух руках хватило, неправда ли? И большинство из них не коты... Представляем вам автоматическую мойку для лап "Фланелевые обнимашки". Питомцам всегда будет приятно помыть свои лапки после прогулки, а ваш пол останется чистым.',
        "price": '22',
        "src": './global-images/for-cards/paw-washer.png',
        "cardRating": '5.0',
        "category": ["cat", "dog"],
        "id": '81',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Домик со звукоизоляцией для собак "Тихий Гав`ань"',
        "description": 'А вы знали, что слух у собаки приоритетнее зрения, а слышат они в диапозоне частот до 45кГц? Представляете, как им приходиться тяжело, когда они слышат резкие, громкие, неприятные звуки? "Тихий Гав`ань" - отличное решение для сохранения слуха вашим любимцам.',
        "price": '91',
        "src": './global-images/for-cards/noise-canceling-dog-house-2.jpeg',
        "cardRating": '3.4',
        "category": ["dog"],
        "id": '83',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Чашка-душ для лап "Foot Spa"',
        "description": '"Foot Spa" - это оригинальный способ легко и быстро помыть лапки после прогулки вашему питомцу. Это не займёт много времени, зато принесёт удовольствие и вам, и вашему питомцу, и вымытому полу. Мягкие щёточки аккуратно и безопасно протрут лапки вашему любимцу, а вода всегда останется тёплой и приятной.',
        "price": '30',
        "src": './global-images/for-cards/electro-paw-cleaner-2.jpeg',
        "cardRating": '4.7',
        "category": ["cat", "dog"],
        "id": '111',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Умный домик для грызунов "Хомяктика" ',
        "description": 'Если у грызунов есть своя культура, то у них ести легенды и мифы, и  из них обязательно будет про "Хомяктику". В разных народах она называлась бы по-разному: "Хоммастер", "Грызлик-Хоум", "Хомячий Олимп", "Грызлик-Сити", но везде это было бы самым лучшим местом на земле.',
        "price": '111',
        "src": './global-images/for-cards/smart-maze-house-1.jpeg',
        "cardRating": '4.1',
        "category": ["maze"],
        "id": '118',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Массажный комплекс для животных "Оазис Релакса"',
        "description": '"Оазис Релакса" - уникальный массажный комплекс. Он был создан не для людей, а для наших маленьких верных друзей - собачек и котиков. Здесь они смогут почувствовать комфорт и расслабление. Если вы хотите сделать вашим питомцам сказочный подарок, то "Оазис Релакса" уже ждёт.',
        "price": '100',
        "src": './global-images/for-cards/massage-complex.jpg',
        "cardRating": '5.0',
        "category": ["cat", "dog"],
        "id": '87',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Трекер для рептилий и амфибий "ReptoAmfiTrack"',
        "description": '"ReptoAmfiTrack" - это серёзный трекер для ваших животных. Для него нет слова невозможно. Он способен рассчитать пройденный путь вашего животного, рассказать сколько он съел корма за день, сколько воды пил, где был, что делал и многое другое. Незаменимый помощник герптелогов.',
        "price": '99',
        "src": './global-images/for-cards/lizard-tracker-4.jpeg',
        "cardRating": '5.0',
        "category": ["unique"],
        "id": '88',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Ошейник с Led-подсветкой для собак "Аммолитовое ожерелье"',
        "description": 'Аммолит похож на чешую красочного дракона и является одним из самых редких и ярких драгоценных камней. Теперь ожерелье из этих радужных чешуек будет всегда указывать на точное местоположение вашего питомца в темноте.',
        "price": '26',
        "src": './global-images/for-cards/led-dog-collar.png',
        "cardRating": '4.5',
        "category": ["dog"],
        "id": '89',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Автоматическая мойка лап для питомца "Авто-Пух"',
        "description": '"Авто-Пух" - это автомотическая мойка лап вашего питомца с ш=пушистыми щёточками, которая не оставит равнодушными ни вас, ни вашего питомца, ни ваш пол. Ваши питомцы полюбят мыть лапки после прогулки, а пол не придётся ежедневно перемывать от следов.',
        "price": '24',
        "src": './global-images/for-cards/animal-paw-washer.jpeg',
        "cardRating": '5.0',
        "category": ["dog", "cat"],
        "id": '90',
        "numm": '0',
    },
    {
        "image": './images/black-heart.png',
        "title": 'Домик со звукоизоляцией для питомцев "Замок ЗвукOFF"',
        "description": 'В домике "Замок ЗвукOFF" ваши питомцы всегда смогут услышать тишину. Когда мы, люди, сможем одеть наушники или воткнуть бируши, наши питомцы будут уходить в свою крепость, где их будет ожидать безмолвие.',
        "price": '103',
        "src": './global-images/for-cards/anti-noise-animal-house.jpg',
        "cardRating": '4.6',
        "category": ["dog", "cat"],
        "id": '91',
        "numm": '0',
    },


];

let newDescription = '';
let newtitle = '';
const cardsContainer = document.querySelector('.cards');

let numberOfCards = [];
let loveCards = [];

// Главная функция отрисовки карточек
const renderCards = (items) => {
    // Получаем актуальные избранные карточки
    const favorites = JSON.parse(localStorage.love || '[]');
    // кнопка купить или цифра
    for (let i = 0; i < 20; i++) {
        // Адаптация описания и заголовка
        if (window.innerWidth <= 1200) newDescription = '';
        else if (window.innerWidth <= 1700) {
            newDescription = items[i].description.slice(0, items[i].description.indexOf('.') + 1);
            if (newDescription.length > 100) {
                newDescription = items[i].description.slice(0, 100 + (items[i].description.slice(100).indexOf(" ")));
            }
            newtitle = items[i].title.slice(items[i].title.indexOf('"'));
        } else {
            newtitle = items[i].title;
            newDescription = items[i].description;
        }

        // Проверка, в избранном ли карточка
        if (favorites.some(fav => fav.id === items[i].id)) {
            items[i].image = './images/red-heart.png';
        } else {
            items[i].image = './images/black-heart.png';
        }

        // Создание HTML карточки
        let superCard = `
        <div class="card card-${items[i].id}">
            <div class="card-image">
                <div class="heart">
                    <img src="${items[i].image}" alt="#" id="heart-${items[i].id}" class="heart-${items[i].id}">
                </div>
                <img class="card-image" src="${items[i].src}" alt="card-image">
            </div>
            <div class="card-info">
                <div class="for-card-rating-back for-card-rating-back-${i}"></div>
                <div class="card-rating"><img src="./images/stars.svg" alt="#"></div>
                <h3 class="card-title">${newtitle}</h3>
                <div class="for-description for-description-${i}">
                    <p class="card-description">${newDescription}</p>
                    <button class="continue-reading continue-reading-${i}">
                        <div class="for-bt-text"><p>Читать дальше>></p></div>
                    </button>
                </div>
                <a href="#" class="item-more item-more-${i}">Узнать больше о товаре</a>
                <p class="card-price">${items[i].price} BYN</p>
            </div>
        </div>
        `;

        cardsContainer.innerHTML += superCard;

        // Адаптивные кнопки и описание
        if (window.innerWidth >= 1200) document.querySelector(`.continue-reading-${i}`).style.display = 'flex';
        if (window.innerWidth >= 1700) document.querySelector(`.continue-reading-${i}`).style.display = 'none';
        if (window.innerWidth <= 1200) {
            document.querySelector(`.item-more-${i}`).style.display = 'flex';
            document.querySelector(`.for-description-${i}`).style.display = 'none';
        }

        // Генерация рейтинга
        let cardInfo = document.querySelector(`.for-card-rating-back-${i}`);
        let backgroundGradient = document.createElement('div');
        let backgroundYellow = (Number(items[i].cardRating) / 5) * 100;
        let backgroundWhite = 100 - backgroundYellow;
        backgroundGradient.classList.add('card-rating-back');
        backgroundGradient.style.background = `linear-gradient(to right, rgb(250, 254, 127) ${backgroundYellow}%, white ${backgroundWhite}%)`;
        cardInfo.appendChild(backgroundGradient);
    }
};

// Клик по сердечку: добавление или удаление из избранного и корзина
cardsContainer.addEventListener('click', (event) => {
    const favorites = JSON.parse(localStorage.love || '[]');
    const bied = JSON.parse(localStorage.buy || '[]')
    for (let i = 0; i < items.length; i++) {
        const summCard = document.querySelector(`#summ-${items[i].id}`);
        const cardBut = document.querySelector(`#card-button-${items[i].id}`)
        if (event.target.id === `card-button-${items[i].id}`) {
            const isBied = bied.some(bie => bie.id === items[i].id);
            if (isBied) {
                // Удалить кнопку купить
                const buying = bied.filter(bie => bie.id !== items[i].id);
                localStorage.buy = JSON.stringify(buying);
                summCard.style.display = 'none';
                cardBut.style.display = 'flex';
            } else {
                // Добавить кнопку купить
                bied.push(items[i]);
                localStorage.buy = JSON.stringify(bied);
                cardBut.style.display = 'none';
                summCard.style.display = 'flex';
            }
        };
        if (event.target.id === `heart-${items[i].id}`) {
            const isFavorite = favorites.some(fav => fav.id === items[i].id);
            if (isFavorite) {
                // Удалить из избранного
                const updated = favorites.filter(fav => fav.id !== items[i].id);
                localStorage.love = JSON.stringify(updated);
                document.querySelector(`#heart-${items[i].id}`).src = './images/black-heart.png';
            } else {
                // Добавить в избранное
                favorites.push(items[i]);
                localStorage.love = JSON.stringify(favorites);
                document.querySelector(`#heart-${items[i].id}`).src = './images/red-heart.png';
            }
            break;
        };
    }
    console.log(JSON.parse(localStorage.buy))
});


renderCards(items);

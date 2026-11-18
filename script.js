

// Інформація про персонажів
const characters = {
    jane: {
        name: "Джейн Ейр",
        text: "Головна героїня роману. Розумна, незалежна та принципова дівчина, яка прагне любові, поваги й особистої свободи. Попри труднощі, вона не відмовляється від власних переконань."
    },
    rochester: {
        name: "Едвард Рочестер",
        text: "Власник маєтку Торнфілд-Голл. Складна й суперечлива особистість, яка закохується в Джейн. Його минуле стає важливою частиною конфлікту роману."
    },
    reed: {
        name: "Місіс Рід",
        text: "Тітка Джейн, яка після смерті її батьків бере дівчинку до свого дому, але ставиться до неї несправедливо та холодно."
    },
    helen: {
        name: "Гелен Бернс",
        text: "Подруга Джейн у школі Ловуд. Вона вирізняється добротою, терпінням і здатністю прощати. Її дружба сильно впливає на Джейн."
    },
    stjohn: {
        name: "Сент-Джон Ріверс",
        text: "Священник, який пропонує Джейн шлюб і спільну місіонерську діяльність. Уособлює обов'язок і самодисципліну."
    },
    bertha: {
        name: "Берта Мейсон",
        text: "Дружина Рочестера, чия історія прихована в маєтку Торнфілд. Її присутність стає важливою причиною драматичних подій."
    }
};

// Додаткова інформація для карток
const details = {
    love: {
        title: "Кохання",
        text: "Кохання Джейн і Рочестера проходить через випробування. Для героїні важливо не лише любити, а й зберігати власну гідність та незалежність."
    },
    independence: {
        title: "Незалежність",
        text: "Джейн прагне самостійно приймати рішення, заробляти на життя та будувати власне майбутнє."
    },
    equality: {
        title: "Рівність",
        text: "Героїня переконана, що люди заслуговують на повагу незалежно від статків, походження чи суспільного становища."
    },
    choice: {
        title: "Моральний вибір",
        text: "Упродовж роману Джейн неодноразово мусить обирати між особистими почуттями, суспільними очікуваннями та власними принципами."
    },
    year: {
        title: "Рік видання",
        text: "Роман «Джейн Ейр» уперше опубліковано у 1847 році."
    },
    author: {
        title: "Авторка",
        text: "Шарлотта Бронте — англійська письменниця XIX століття. Вона створила один із найвідоміших романів англійської літератури."
    },
    penname: {
        title: "Псевдонім",
        text: "Спочатку роман вийшов під чоловічим псевдонімом Каррер Белл. Авторка використовувала його, щоб її твори оцінювали передусім за змістом."
    },
    narration: {
        title: "Оповідь від першої особи",
        text: "Історію розповідає сама Джейн. Завдяки цьому читач краще розуміє її думки, почуття та переживання."
    },
    stages: {
        title: "Етапи життя Джейн",
        text: "Життєвий шлях героїні охоплює дитинство в Гейтсхеді, навчання в Ловуді, роботу в Торнфілді, перебування в родині Ріверсів і повернення до Рочестера."
    },
    genre: {
        title: "Жанр твору",
        text: "«Джейн Ейр» — роман виховання з елементами готичного роману, психологічної та соціальної прози."
    },
    redroom: {
        title: "Червона кімната",
        text: "Червона кімната символізує страх, самотність і несправедливість, які Джейн переживає в дитинстві."
    },
    thornfield: {
        title: "Торнфілд-Голл",
        text: "Маєток Рочестера стає місцем роботи Джейн, її знайомства з господарем і розвитку головної любовної історії."
    },
    fire: {
        title: "Вогонь",
        text: "Вогонь у романі може символізувати пристрасть, сильні почуття, небезпеку та руйнування."
    },
    birds: {
        title: "Птахи",
        text: "Образ птахів пов'язаний зі свободою, прагненням вирватися за межі обмежень і бажанням незалежності."
    },
    gateshead: {
        title: "Гейтсхед",
        text: "У дитинстві Джейн живе в домі родини Рідів. Вона зазнає несправедливого ставлення та почувається чужою."
    },
    lowood: {
        title: "Ловуд",
        text: "У школі-інтернаті Джейн стикається з суворими умовами, але здобуває освіту та знаходить справжню подругу — Гелен Бернс."
    },
    thornfieldlife: {
        title: "Життя в Торнфілді",
        text: "Джейн працює гувернанткою Аделі. Тут вона знайомиться з Рочестером і поступово закохується в нього."
    },
    moorhouse: {
        title: "Дім Ріверсів",
        text: "Після втечі з Торнфілда Джейн знаходить прихисток у родині Ріверсів і дізнається про своїх родичів."
    },
   return: {
    title: "Повернення",
    text: "Джейн повертається до Рочестера вже як незалежна жінка. Їхні стосунки будуються на взаємній повазі та рівності."
},

"trait-independence": {
    title: "Незалежність",
    text: "Джейн прагне самостійності, хоче сама приймати рішення та не залежати від чужої волі."
},
"trait-courage": {
    title: "Сміливість",
    text: "Героїня не боїться відстоювати свої переконання та долати складні життєві обставини."
},
"trait-kindness": {
    title: "Доброта",
    text: "Джейн здатна співчувати іншим, цінує щирість і виявляє турботу до людей."
},
"trait-intelligence": {
    title: "Розум",
    text: "Героїня освічена, спостережлива та вміє самостійно аналізувати події."
},
"trait-principles": {
    title: "Принциповість",
    text: "Джейн залишається вірною власним моральним переконанням навіть тоді, коли це вимагає складних рішень."
}
};

// Відображення інформації про персонажа
function showCharacter(id) {
    const character = characters[id];
    const info = document.getElementById("character-info");

    if (!character || !info) return;

    info.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = character.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = character.text;

    info.append(heading, paragraph);
    info.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Відкриття модального вікна
const modal = document.getElementById("detail-modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function openModal(key) {
    const item = details[key];

    if (!item || !modal || !modalTitle || !modalText) return;

    modalTitle.textContent = item.title;
    modalText.textContent = item.text;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeButton = modal.querySelector("[data-close-modal]");
    if (closeButton) closeButton.focus();
}

// Закриття модального вікна
function closeModal() {
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

// Обробка всіх натискань на інтерактивні елементи
document.addEventListener("click", function (event) {
    const characterButton = event.target.closest("[data-character]");

    if (characterButton) {
        showCharacter(characterButton.dataset.character);
        return;
    }

    const detailCard = event.target.closest("[data-detail]");

    if (detailCard) {
        openModal(detailCard.dataset.detail);
        return;
    }

    const closeButton = event.target.closest("[data-close-modal]");

    if (closeButton) {
        closeModal();
        return;
    }
});

// Закриття вікна клавішею Escape
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Кнопка повернення нагору
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (!backToTop) return;

    backToTop.classList.toggle("visible", window.scrollY > 400);
});

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

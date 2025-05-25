const form = document.getElementById('infoForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';

    let isValid = true;

    // Валідація імені
    if (nameInput.value.trim() === '') {
        nameError.textContent = "Ім'я є обов'язковим полем.";
        isValid = false;
    }

    // Валідація Email
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailError.textContent = "Email є обов'язковим полем.";
        isValid = false;
    }
    // цю перевірку можна закоментувати, оскільки type="email" сам перевіряє наявність символу '@'
    // else if (!emailValue.includes('@')) {
    //     emailError.textContent = "Email повинен містити символ '@'.";
    //     isValid = false;
    // }


    // Валідація Віку
    const ageValue = ageInput.value.trim();
    if (ageValue === '') {
        ageError.textContent = "Вік є обов'язковим полем.";
        isValid = false;
    } else {
        const ageNumber = parseInt(ageValue, 10);
        if (isNaN(ageNumber)) {
            ageError.textContent = "Вік повинен бути числом.";
            isValid = false;
        } else if (ageNumber <= 0) {
            ageError.textContent = "Вік повинен бути більшим за 0.";
            isValid = false;
        }
    }

    if (isValid) {
        alert("Form submitted!");

    }
});
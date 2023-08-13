const box = document.querySelector("box");
const btn = document.querySelector("button");
const fileInputsEl = document.querySelectorAll(".form__input--file");
const fileNameEl = document.querySelectorAll(".file-name");
const nextStepBtn = document.querySelector("#next-step-btn");

const user = {};

// FormElems
const bookingFormEl = document.querySelector(".booking-form");
const formEl = document.querySelector("#form");

// Faq

const faqs = document.querySelectorAll(".faq__item");
faqs.forEach((faq) => {
  faq.classList.remove("active");
});

faqs.forEach((item) => {
  item.addEventListener("click", () => {
    const toggle = item.querySelector(".faq-toggle");
    toggle.parentNode.classList.toggle("active");
  });
});

const menuBurger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu__mobile');

menuBurger.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
})

// Step

const getFormValuesAndInputs = () => {
  // Inputs
  const inputUserName = bookingFormEl.querySelector('input[name="username"]');
  const inputEmail = bookingFormEl.querySelector('input[name="email"]');
  const inputCity = bookingFormEl.querySelector('input[name="city"]');
  const inputAge = bookingFormEl.querySelector('input[name="age"]');
  const inputPhone = bookingFormEl.querySelector('input[name="phone"]');
  const inputTattooDate = bookingFormEl.querySelector(
    'input[name="tattoo-date"]'
  );
  const inputSize = bookingFormEl.querySelector('input[name="size"]');
  const inputIdea = bookingFormEl.querySelector('input[name="idea"]');
  const inputHideTattoo = bookingFormEl.querySelector(
    'input[name="hide-tattoo"]'
  );

  // Values
  const userNameValue = inputUserName.value.trim();
  const emailValue = inputEmail.value.trim();
  const cityValue = inputCity.value.trim();
  const ageValue = +inputAge.value.trim();
  const phoneValue = inputPhone.value.trim();
  const tattooDateValue = inputTattooDate.value.trim();
  const sizeValue = inputSize.value.trim();
  const ideaValue = inputIdea.value.trim();
  const hideTattooValue = inputHideTattoo.value.trim();

  return {
    inputUserName,
    userNameValue,
    inputEmail,
    emailValue,
    inputCity,
    cityValue,
    inputAge,
    ageValue,
    inputPhone,
    phoneValue,
    inputTattooDate,
    tattooDateValue,
    inputSize,
    sizeValue,
    inputIdea,
    ideaValue,
    hideTattooValue,
    inputHideTattoo,
  };
};

const hasValuesMinLength = (len, value) => {
  return value.length >= len;
};

const isString = (value) => {
  return typeof value === "string";
};

const isNumber = (value) => {
  return typeof value === "number";
};

const validateForm = (value) => {
  const minAge = 18;
  const {
    inputUserName,
    userNameValue,
    inputEmail,
    emailValue,
    inputCity,
    cityValue,
    inputAge,
    ageValue,
    inputPhone,
    phoneValue,
    inputTattooDate,
    tattooDateValue,
    inputSize,
    sizeValue,
    inputIdea,
    ideaValue,
    hideTattooValue,
    inputHideTattoo,
  } = getFormValuesAndInputs();

  const emailRegExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gi;
  const phoneRegExp = /^\+?[0-9\s-()]+$/;

  const isValidFullName =
    isString(userNameValue) && hasValuesMinLength(3, userNameValue);
  const isValidEmail = emailRegExp.test(emailValue);
  const isValidCity = isString(cityValue) && hasValuesMinLength(2, cityValue);
  const isValidAge = isNumber(ageValue) && ageValue >= minAge;
  const isValidPhone = phoneRegExp.test(phoneValue);
  const isValidDate = hasValuesMinLength(4, tattooDateValue);
  const isValidSize = hasValuesMinLength(1, sizeValue);
  const isValidIdea = hasValuesMinLength(5, ideaValue);
  const isValidHideTattoo = hasValuesMinLength(5, hideTattooValue);

  if (value === "step1") {
    if (!isValidFullName) {
      inputUserName.classList.add("form__input--error");
      inputUserName.nextElementSibling.textContent =
        "This field is required and should be at least 3 characters long.";
    } else {
      inputUserName.classList.remove("form__input--error");
      inputUserName.nextElementSibling.textContent = "";
    }

    if (!isValidEmail) {
      inputEmail.classList.add("form__input--error");
      inputEmail.nextElementSibling.textContent =
        "Please enter a valid email address";
    } else {
      inputEmail.classList.remove("form__input--error");
      inputEmail.nextElementSibling.textContent = "";
    }

    if (!isValidCity) {
      inputCity.classList.add("form__input--error");
      inputCity.nextElementSibling.textContent = "This field is required.";
    } else {
      inputCity.classList.remove("form__input--error");
      inputCity.nextElementSibling.textContent = "";
    }

    if (!isValidAge) {
      inputAge.classList.add("form__input--error");
      inputAge.nextElementSibling.textContent = `Please enter a valid age (at least ${minAge} years old).`;
    } else {
      inputAge.classList.remove("form__input--error");
      inputAge.nextElementSibling.textContent = "";
    }

    if (!isValidPhone) {
      inputPhone.classList.add("form__input--error");
      inputPhone.nextElementSibling.textContent =
        "Please enter a valid phone number.";
    } else {
      inputPhone.classList.remove("form__input--error");
      inputPhone.nextElementSibling.textContent = "";
    }

    if (!isValidDate) {
      inputTattooDate.classList.add("form__input--error");
      inputTattooDate.nextElementSibling.textContent = "This field is required";
    } else {
      inputTattooDate.classList.remove("form__input--error");
      inputTattooDate.nextElementSibling.textContent = "";
    }

    return {
      isValidFullName,
      isValidEmail,
      isValidCity,
      isValidAge,
      isValidPhone,
      isValidDate,
    };
  } else if (value === "step2") {
    if (!isValidSize) {
      inputSize.classList.add("form__input--error");
      inputSize.nextElementSibling.textContent = "This field is required";
    } else {
      inputSize.classList.remove("form__input--error");
      inputSize.nextElementSibling.textContent = "";
    }

    if (!isValidIdea) {
      inputIdea.classList.add("form__input--error");
      inputIdea.nextElementSibling.textContent = "This field is required";
    } else {
      inputIdea.classList.remove("form__input--error");
      inputIdea.nextElementSibling.textContent = "";
    }

    if (!isValidHideTattoo) {
      inputHideTattoo.classList.add("form__input--error");
      inputHideTattoo.nextElementSibling.textContent = "This field is required";
    } else {
      inputHideTattoo.classList.remove("form__input--error");
      inputHideTattoo.nextElementSibling.textContent = "";
    }
    return { isValidSize, isValidIdea, isValidHideTattoo };
  }
};

const showStep1Block = () => {
  bookingFormEl.querySelector("#step-two-form").style.display = "none";
  bookingFormEl.querySelector("#step-one-form").style.display = "block";
  bookingFormEl.querySelector("#step-number-one").style.display = "inline";
  bookingFormEl.querySelector("#check-mark-icon").style.display = "none";
  bookingFormEl.querySelector(".steps__line").style.backgroundColor = "#c4c4c4";
  bookingFormEl.querySelector("#step-two").style.backgroundColor = "#9c9c9c";
  bookingFormEl.querySelector("#tattoo-design").style.color = "#9c9c9c";
};

const showStep2Block = () => {
  bookingFormEl.querySelector("#step-one-form").style.display = "none";
  bookingFormEl.querySelector("#step-two-form").style.display = "block";
  bookingFormEl.querySelector("#step-number-one").style.display = "none";
  bookingFormEl.querySelector("#check-mark-icon").style.display = "block";
  bookingFormEl.querySelector(".steps__line").style.backgroundColor = "#ff39bc";
  bookingFormEl.querySelector("#step-two").style.backgroundColor = "#ff39bc";
  bookingFormEl.querySelector("#tattoo-design").style.color = "#1a1a1a";
  bookingFormEl.querySelectorAll(".steps__item")[1].style.cursor = "none";
};

bookingFormEl.addEventListener("click", (event) => {
  if (event.target.closest("#next-step-btn")) {
    const {
      isValidFullName,
      isValidEmail,
      isValidCity,
      isValidAge,
      isValidPhone,
      isValidDate,
    } = validateForm("step1");

    if (
      isValidFullName &&
      isValidEmail &&
      isValidCity &&
      isValidAge &&
      isValidPhone &&
      isValidDate
    ) {
      showStep2Block();
    } else {
      toastr.error("Please make sure all fields are filled correctly");
    }
  }
  if (event.target.closest("#back-step") || event.target.closest("#step-one")) {
    showStep1Block();
  }
});

// Form

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { isValidSize, isValidIdea, isValidHideTattoo } = validateForm("step2");

  user.userName = formData.get("username");
  user.email = formData.get("email");
  user.city = formData.get("city");
  user.age = formData.get("age");
  user.phone = formData.get("phone");
  user.tattooDate = formData.get("tattoo-date");
  user.size = formData.get("size");
  user.idea = formData.get("idea");
  user.hideTattoo = formData.get("hide-tattoo");
  user.referencesImages = formData.get("references-images");
  user.placeForTattoo = formData.get("place-for-tattoo");
  user.colors = formData.get("colors");

  if (isValidSize && isValidIdea && isValidHideTattoo) {
    console.log(user);
    showStep1Block();
    formEl.reset();
    toastr.success(
      `We have received your information and will be in touch soon to discuss your tattoo design and placement options.`,
      "Thank you for submitting the form!"
    );
  } else {
    toastr.error("Please make sure all fields are filled correctly");
  }
});

fileInputsEl.forEach((fileInput, index) => {
  fileInput.addEventListener("change", () => {
    const fileNames = [];
    if (fileInput.files.length > 0) {
      for (const file of fileInput.files) {
        fileNames.push(file.name);
      }
      const truncatedFileNames = fileNames.slice(0, 3);
      fileNameEl[
        index
      ].textContent = `Selected files: ${truncatedFileNames.join(", ")}`;
    } else {
      fileNameEl[index].textContent = "";
    }
  });
});

//плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu__list-link');

  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
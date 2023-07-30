const box = document.querySelector("box");
const btn = document.querySelector("button");
const fileInputsEl = document.querySelectorAll(".form__input--file");
const fileNameEl = document.querySelectorAll(".file-name");

// FormElems
const formEl = document.querySelector("#form");
const bookingFormEl = document.querySelector(".booking-form");

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

// Form

bookingFormEl.addEventListener("click", (event) => {
  if (event.target.closest("#next-step-btn")) {
    bookingFormEl.querySelector("#step-one-form").style.display = "none";
    bookingFormEl.querySelector("#step-two-form").style.display = "block";
    bookingFormEl.querySelector("#step-number-one").style.display = "none";
    bookingFormEl.querySelector("#check-mark-icon").style.display = "block";
    bookingFormEl.querySelector(".steps__line").style.backgroundColor =
      "#ff39bc";
    bookingFormEl.querySelector("#step-two").style.backgroundColor = "#ff39bc";
    bookingFormEl.querySelector("#tattoo-design").style.color = "#1a1a1a";
  }
  if (event.target.closest("#back-step") || event.target.closest("#step-one")) {
    bookingFormEl.querySelector("#step-two-form").style.display = "none";
    bookingFormEl.querySelector("#step-one-form").style.display = "block";
    bookingFormEl.querySelector("#step-number-one").style.display = "inline";
    bookingFormEl.querySelector("#check-mark-icon").style.display = "none";
    bookingFormEl.querySelector(".steps__line").style.backgroundColor =
      "#c4c4c4";
    bookingFormEl.querySelector("#step-two").style.backgroundColor = "#9c9c9c";
    bookingFormEl.querySelector("#tattoo-design").style.color = "#9c9c9c";
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
      console.log(truncatedFileNames);
      fileNameEl[
        index
      ].textContent = `Selected files: ${truncatedFileNames.join(", ")}`;
    } else {
      fileNameEl[index].textContent = "";
    }
  });
});

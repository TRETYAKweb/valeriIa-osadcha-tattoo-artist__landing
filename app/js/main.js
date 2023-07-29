$(function () {});
const box = document.querySelector("box");
const btn = document.querySelector("button");

const faqs = document.querySelectorAll(".faq__item");
faqs.forEach((faq) => {
  faq.classList.remove("active");
});

console.log(faqs);

// Обработчик события клика на кнопку .faq-toggle
const toggles = document.querySelectorAll(".faq-toggle");

console.log(toggles);

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

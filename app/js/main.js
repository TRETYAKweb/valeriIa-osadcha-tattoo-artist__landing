const box = document.querySelector("box");
const btn = document.querySelector("button");

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

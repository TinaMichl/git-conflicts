const dateElement = document.querySelector('[data-js="date"]');
const date = new Date(text).toLocaleDateString("en-US");
dateElement.textContent = date;
document.querySelector('[data-js="year"]').textContent =
  new Date().getFullYear();

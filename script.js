const dateElement = document.querySelector('[data-js="date"]');
const date = new Date(text).toLocaleDateString("en-US");
dateElement.textContent = date;

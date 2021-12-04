const promo__timer = document.querySelector(".promo__timer");
const promo__square = document.querySelector(".promo__square");

promo__timer.style.display = "none";
promo__square.style.display = "none";

const promo__ellipse = document
  .querySelector(".promo__ellipse")
  .addEventListener("click", () => {
    promo__timer.style.display =
      promo__timer.style.display === "none" ? "flex" : "none";
    promo__square.style.display =
      promo__square.style.display === "none" ? "flex" : "none";
  });

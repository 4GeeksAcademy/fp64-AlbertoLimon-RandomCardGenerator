/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  play();
};

const getRandomValue = array => {
  const numRandom = Math.floor(Math.random() * array.length);
  return array[numRandom];
};

const getCardValue = () => {
  const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K"];
  return getRandomValue(cardValue);
};

const getCardSuit = () => {
  const listaPalos = ["spade", "club", "heart", "diamond"];
  return getRandomValue(listaPalos);
};

function setCard(number, cardSuit) {
  document.querySelector(".numCard").innerHTML = number;
  switch (cardSuit) {
    case "spade":
      document.querySelector(".card").classList.add("spade");
      document.querySelector("#suitUp").innerHTML = "♠";
      document.querySelector("#suitDown").innerHTML = "♠";
      break;
    case "club":
      document.querySelector(".card").classList.add("club");
      document.querySelector("#suitUp").innerHTML = "♣";
      document.querySelector("#suitDown").innerHTML = "♣";
      break;
    case "heart":
      document.querySelector(".card").classList.add("heart");
      document.querySelector("#suitUp").innerHTML = "♥";
      document.querySelector("#suitDown").innerHTML = "♥";
      break;
    case "diamond":
      document.querySelector(".card").classList.add("diamond");
      document.querySelector("#suitUp").innerHTML = "♦";
      document.querySelector("#suitDown").innerHTML = "♦";
      break;
  }
}

const play = () => {
  console.log("play");
  const cardNumber = getCardValue();
  const cardSuit = getCardSuit();
  setCard(cardNumber, cardSuit);
};
document.querySelector("#btnPlay").addEventListener("click", () => {
  play();
});

document.querySelector("#btnInterval").addEventListener("click", () => {
  setInterval(play(), 1000);
});

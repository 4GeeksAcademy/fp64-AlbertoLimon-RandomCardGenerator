/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  play();
};

const suitList = ["spade", "club", "heart", "diamond"];

const getRandomValue = array => {
  const numRandom = Math.floor(Math.random() * array.length);
  return array[numRandom];
};

const getCardValue = () => {
  const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "K"];
  return getRandomValue(cardValue);
};

const getCardSuit = () => {
  return getRandomValue(suitList);
};

function setCard(number, cardSuit) {
  document.querySelector(".numCard").innerHTML = number;
  const card = document.querySelector(".card");
  switch (cardSuit) {
    case "spade":
      resetCardClass(card);
      card.classList.add("spade");
      setSuitCard("♠");
      break;
    case "club":
      resetCardClass(card);
      card.classList.add("club");
      setSuitCard("♣");
      break;
    case "heart":
      resetCardClass(card);
      card.classList.add("heart");
      setSuitCard("♥");
      break;
    case "diamond":
      resetCardClass(card);
      card.classList.add("diamond");
      setSuitCard("♦");
      break;
  }
}

function setSuitCard(suitCard) {
  document.querySelector("#suitUp").innerHTML = suitCard;
  document.querySelector("#suitDown").innerHTML = suitCard;
}

function resetCardClass(card) {
  suitList.forEach(palo => {
    if (card.classList.contains(palo)) {
      card.classList.remove(palo);
    }
  });
}

const play = () => {
  const cardNumber = getCardValue();
  const cardSuit = getCardSuit();
  setCard(cardNumber, cardSuit);
};

document.querySelector("#btnPlay").addEventListener("click", () => {
  play();
});

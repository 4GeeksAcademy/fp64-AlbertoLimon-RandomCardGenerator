/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const getRandomValue = array => {
    const numRandom = Math.floor(Math.random() * array.length);
    return array[numRandom];
  };

  const getCardValue = () => {
    const cardValue = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Queen", "King"];
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
        const spade = document.querySelector(".spade");
        spade.querySelectorAll(".cardSuit").innerHTML = "♠";
        break;
      case "club":
        document.querySelector(".card").classList.add("club");
        const club = document.querySelector(".club");
        club.querySelectorAll(".cardSuit").innerHTML = "♣";
        break;
      case "heart":
        document.querySelector(".card").classList.add("heart");
        const heart = document.querySelector(".heart");
        heart.querySelectorAll(".cardSuit").innerHTML = "♥";
        break;
      case "diamond":
        document.querySelector(".card").classList.add("diamond");
        const diamond = document.querySelector(".diamond");
        diamond.querySelectorAll(".cardSuit").innerHTML = "♦";
        break;
    }
  }

  const play = () => {
    const cardNumber = getCardValue();
    const cardSuit = getCardSuit();
    setCard(cardNumber, cardSuit);
  };

  play();
};

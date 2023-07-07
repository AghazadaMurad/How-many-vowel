"use strict";

const modalEl = document.querySelector(".keyPress");

const myString = prompt("enter word");
const sait = [
  "e",
  "i",
  "u",
  "o",
  "a",
  "A",
  "U",
  "O",
  "I",
  "E",
  "ü",
  "Ü",
  "ö",
  "Ö",
  "ü",
  "ı",
  "I",
  "ə",
  "Ə",
];

let count = 0;
for (let i = 0; i < sait.length; i++) {
  for (let e = 0; e < myString.length; e++) {
    if (myString[e] === sait[i]) {
      count += 1;
    }
  }
}

modalEl.innerText = count;

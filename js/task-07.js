"use strict";
const inputRange = document.querySelector("input#font-size-control");
const textToChange = document.querySelector("span#text");

inputRange.value = inputRange.min;
// console.log("min: "+ inputRange.min + " max:" + inputRange.max);

inputRange.addEventListener("input", (currentValue) => {
  const inputValue = currentValue.currentTarget.value;
  textToChange.style.fontSize = inputValue + "px";
});

// console.log(textToChange)
// console.log(document.getElementById('text').textContent)
/*
Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

let btnEl = document.querySelector(".btn-el");
let inputEl = document.querySelector(".input-el");
let meterEl = document.querySelector(".meter-el");
let literEl = document.querySelector(".liter-el");
let kiloEl = document.querySelector(".kilo-el");




btnEl.addEventListener("click", function () {
  let num = inputEl.value;

  let meterToFeet = (num * 3.281).toFixed(3);
  let feetToMeter = (num * 0.304).toFixed(3);
  let literToGallon = (num * 0.264).toFixed(3);
  let gallonToLiter = (num * 3.785).toFixed(3);
  let kiloToPound = (num * 2.204).toFixed(3);
  let poundToKilo = (num * 0.453).toFixed(3);

  meterEl.textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeter} meters`;
  literEl.textContent = `${num} liters = ${literToGallon} gallons | ${num} gallons = ${gallonToLiter} liters`;
  kiloEl.textContent = `${num} kilos = ${kiloToPound} pounds | ${num} pounds = ${poundToKilo} kilos`;


})


/*
//OPPGAVER
 Oppgave1: 
  1.lag 3 variabler for en fruktbutikk,
  en variabel for butikkens navn, en variabel for antall epler i butikken, 
  og en variabel for om butikken er åpen eller ikke
  2. console.log variablene
  3. Hvilket variabel skal ha const?
  BONUS!
  4. lag en array eller et object som viser forskjellig typer frukt i butikken

 Oppgave2: 
  1.skriv en funksjon som console.log "Min første funksjon"
  2. skriv en funksjon som trekker fra 2 tall, f.eks 7-3,
  consol.log sum 
  BONUS!
  3. skriv en funksjon hvor du bruker parametre og argumenter(se over om usikker),
  funksjonen skal sette sammen et fornavn og et etternavn, 
  skriv 2 variabler utenfor funksjonen som lagrer funksjonen med ulike verdier, 
  console.log variabel navnet

 Oppgave3:
  1.Lag en ny knapp i HTML og gi den en id
  2. Lag en variabel hvor du kobler til den nye knappen
  3. Lag en eventListener som console.log "knapp er trykket" når du trykker på den
  BONUS!
  4. Lag en animasjon i CSS som du skrur av og på med addEventlistener
*/

// SVAR PÅ OPPGAVE 1:
const storeName = "Fruity";
let numberofApples = 10;
let storeOpen = true;
console.log(storeName, numberofApples, storeOpen);

let fruitStorage = ["Apples", "Pears", "Cherrys"]
console.log(fruitStorage);

// SVAR PÅ OPPGAVE 2:
function myFunction() {
  console.log("Min første funksjon");
};

myFunction()

function calculator() {
  let numberOne = 10;
  let numberTwo = 5;
  let sum = numberOne + numberTwo
  console.log(sum);
};

calculator()

function personalia(first, last) {
  let full = first + last;
  console.log(full);
};

personalia("Julie", "Hauge");

// SVAR PÅ OPPGAVE 3:
const myButton = document.querySelector("#myButton");
console.log(myButton);
const squareToCircle = document.querySelector("#squareToCircle");
console.log(squareToCircle);


myButton.addEventListener("click", function () {
  console.log("Button is clicked!")
  squareToCircle.classList.toggle("squareToCircle")
})

//Datatyper
//Number, String, Boloeon
const name = "Julie";
let age = 27;
let isPresent = true;

//Arrays, objects
let passengers = ['Ania Kubow', 'Kevin Powell', 'Simo Edwin', 'Thomas Cargill'];

let flightInfo = {
  isDelayed: true,
  departure: {
    time: '09.15',
    airport: 'Flesland ',
    city: 'Bergen',
  },

  arrival: {
    time: '06.30',
    airport: 'JFK',
    city: 'New York',
  },
};

// Hvordan skrive en funksjon

function addNumbers() {
  let numOne = 2;
  let numTwo = 10;

  let sum = numOne + numTwo;
  console.log(sum);
};

addNumbers();

// Parameter vs argumenter

function minusNumbers(a, b) {
  let sum = a - b;
  console.log(sum);

  return sum;
}
minusNumbers(10, 5);

let firstSum = minusNumbers(10, 3);
let secondSum = minusNumbers(8, 4);

console.log(firstSum);
console.log(secondSum);

// Hvordan hente inn ting vi skal gjøre noe med
const toggleCircle = document.querySelector("#toggleCircle");
console.log(toggleCircle)
const toggle = document.querySelector("#toggleCont");
console.log(toggle);
const button = document.querySelector("#showBtn");
console.log(button);
const text = document.querySelector("#text");
console.log(text);

toggle.addEventListener("click", function () {
  console.log("Click is registered");
  if (toggleCircle.classList.contains("move")) {
    toggleCircle.classList.remove("move");
    toggleCircle.classList.add("moveBack");
  } else {
    toggleCircle.classList.remove("moveback");
    toggleCircle.classList.add("move");
  };
});

button.addEventListener("click", function () {
  console.log("Click is registered");
  text.classList.toggle("showTextBox");
  text.classList.toggle("hiddenBox");
});
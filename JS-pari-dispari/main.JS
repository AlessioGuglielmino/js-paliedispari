// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno:
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Buon lavoro e buon divertimento!

// CHIEDO ALL'UTENTE DI SCEGLIERE TRA PARO E DISPARO
let sceltaUser = prompt('scegli tra "paro" e "disparo"');
let numeroParo = "hai scelto numero paro";
let numeroDisparo = "hai scelto numero disparo";

if (sceltaUser == "paro") {
  sceltaUser = numeroParo;
} else {
  sceltaUser = numeroDisparo;
}
console.log(sceltaUser);

// CHIEDO ALL'UTENTE DI SCEGLIERE TRA 1 E 5

let numeroUser = parseInt(prompt("scegli un numero da 1 a 5"));
if (numeroUser > 5) {
  alert("inserisci un numero che vada da 1 a massimo 5");
}

console.log("il numero utente: " + numeroUser);

//FUNZIONE PER CREARE UN NUMERO RANDOM PER LA CPU DA 1 A 5

function numeroCpu() {
  numeroCpu = Math.floor(Math.random() * 5 + 1);
  return numeroCpu;
}

let numeroCpuRandom = numeroCpu();
console.log("il nuemro CPU : " + numeroCpuRandom);

let sommaNumeri = numeroUser + numeroCpuRandom;
console.log(sommaNumeri);

//FUNZIONE PER DICHIARARE SE IL NUEMRO è PARO O DISPARO

function paperino() {
  if (sommaNumeri % 2 == 0) {
    console.log("il numero è paro");
  } else {
    console.log("il numero è disparo");
  }
  return paperino;
}
paperino();

if (
  (sommaNumeri % 2 == 0 && sceltaUser == numeroParo) ||
  (sommaNumeri % 2 !== 0 && sceltaUser == numeroDisparo)
) {
  console.log("l'utente ha vinto");
} else {
  console.log("la CPU ha vinto");
}

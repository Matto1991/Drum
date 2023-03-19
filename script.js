let button1 = document.querySelector("#button1");
let audioTom1 = "sounds/tom-1.mp3";
let button2 = document.querySelector("#button2");
let audioTom2 = "sounds/tom-2.mp3";
let button3 = document.querySelector("#button3");
let audioTom3 = "sounds/tom-3.mp3";
let button4 = document.querySelector("#button4");
let audioTom4 = "sounds/tom-4.mp3";
let button5 = document.querySelector("#button5");
let audioSnare = "sounds/snare.mp3";
let button6 = document.querySelector("#button6");
let audioCrash = "sounds/crash.mp3";
let button7 = document.querySelector("#button7");
let audioKickBass = "sounds/kick-bass.mp3";

function playInstrument(audio) {
  const sound = new Audio(audio);
  sound.play();
}

//---------------ARREGLAR para que suenen apretando la tecla antes hay que clickear el elemento-----------

//-------------------button 1---------------------
button1.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    playInstrument(audioTom1);
    console.log("tecla a");
  }
});
button1.addEventListener("click", () => {
  playInstrument(audioTom1);
  console.log("click boton 1");
});

//-------------------button 2---------------------

button2.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    playInstrument(audioTom2);
    console.log("tecla s");
  }
});
button2.addEventListener("click", () => {
  playInstrument(audioTom2);
  console.log("click boton 2");
});

//-------------------button 3---------------------
button3.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    playInstrument(audioTom3);
    console.log("tecla d");
  }
});
button3.addEventListener("click", () => {
  playInstrument(audioTom3);
  console.log("click boton 3");
});

//-------------------button 4---------------------

button4.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    playInstrument(audioTom4);
    console.log("tecla f");
  }
});
button4.addEventListener("click", () => {
  playInstrument(audioTom4);
  console.log("click boton 4");
});

//-------------------button 5---------------------
button5.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    playInstrument(audioSnare);
    console.log("tecla j");
  }
});
button5.addEventListener("click", () => {
  playInstrument(audioSnare);
  console.log("click boton 5");
});
//-------------------button 6---------------------
button6.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    playInstrument(audioCrash);
    console.log("tecla k");
  }
});
button6.addEventListener("click", () => {
  playInstrument(audioCrash);
  console.log("click boton 6");
});
//-------------------button 7---------------------
button7.addEventListener("keydown", function (event) {
  if (event.key === "l") {
    playInstrument(audioKickBass);
    console.log("tecla l");
  }
});
button7.addEventListener("click", () => {
  playInstrument(audioKickBass);
  console.log("click boton 7");
});

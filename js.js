
const elementolivros = document.getElementById("livroslidos");
const elementonivel = document.querySelector("#nivel");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "arnold.webp";
    elementolivros.innerText = "Até Livros Lidos : 4";
    elementonivel.innerText = "Nível: Schuwazenneger";
    elementoBtn.value = "segundo";
} else if (elementoBtn.value == "segundo") {
    elementoImg.src = "bill.jpeg";
    elementolivros.innerText = "Até Livros Lidos : 12";
    elementonivel.innerText = "Nível: Warren Buffet";
    elementoBtn.value = "terceiro";
} else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "warren.jpeg";
    elementolivros.innerText = "apanhando";
    elementonivel.innerText = "sofrendo";
    elementoBtn.value = "quarto";
  } else {
    elementoImg.src = "prep2.png";
    elementolivros.innerText = "Seya Preparando";
    elementonivel.innerText = "Preparando para batalhar";
    elementoBtn.value = "primeiro";
  }
});
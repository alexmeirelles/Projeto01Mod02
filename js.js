
const elementolivros = document.getElementById("livroslidos");
const elementonivel = document.querySelector("#nivel");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#botao");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "arnold.webp";
    elementolivros.innerText = "Até Livros Lidos : 4";
    elementonivel.innerText = "Nível: Schuwazenneger";
    elementoBtn.value = "segundo";
} else if (elementoBtn.value == "segundo") {
    elementoImg.src = "bill.jpeg";
    elementolivros.innerText = "Até Livros Lidos : 8";
    elementonivel.innerText = "Nível: Bill Gates";
    elementoBtn.value = "terceiro";
} else {
    elementoImg.src = "warren.jpeg";
    elementolivros.innerText = "Até Livros Lidos : 12";
    elementonivel.innerText = "Nível: Warren Buffet";
    elementoBtn.value = "primeiro";
  } 
});
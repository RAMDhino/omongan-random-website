let parent = document.getElementById("parent"); 
let card1 = document.getElementById("card_1");
let card2 = document.getElementById("card_2");

function toggleDark() {
  parent.classList.toggle("toggle-dark-class");
  card1.classList.toggle("bg-dark");
  card2.classList.toggle("bg-dark");
}

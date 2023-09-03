let restart = document.querySelector("#butt");
let cells = document.querySelectorAll("td");
function clear() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
restart.addEventListener("click", clear);

let cell1 = document.querySelector("#one");
let cell2 = document.querySelector("#two");
let cell3 = document.querySelector("#three");
let cell4 = document.querySelector("#four");
let cell5 = document.querySelector("#five");
let cell6 = document.querySelector("#six");
let cell7 = document.querySelector("#seven");
let cell8 = document.querySelector("#eight");
let cell9 = document.querySelector("#nine");

cell1.addEventListener("click", function () {
  cell1.textContent = "X";
});
cell1.addEventListener("dblclick", function () {
  cell1.textContent = "O";
});

cell2.addEventListener("click", function () {
  cell2.textContent = "X";
});
cell2.addEventListener("dblclick", function () {
  cell2.textContent = "O";
});
cell3.addEventListener("click", function () {
  cell3.textContent = "X";
});
cell3.addEventListener("dblclick", function () {
  cell3.textContent = "O";
});
cell4.addEventListener("click", function () {
  cell4.textContent = "X";
});
cell4.addEventListener("dblclick", function () {
  cell4.textContent = "O";
});
cell5.addEventListener("click", function () {
  cell5.textContent = "X";
});
cell5.addEventListener("dblclick", function () {
  cell5.textContent = "O";
});

cell6.addEventListener("dblclick", function () {
  cell6.textContent = "O";
});
cell6.addEventListener("click", function () {
  cell6.textContent = "X";
});
cell7.addEventListener("dblclick", function () {
  cell7.textContent = "O";
});
cell7.addEventListener("click", function () {
  cell7.textContent = "X";
});
cell8.addEventListener("dblclick", function () {
  cell8.textContent = "O";
});
cell8.addEventListener("click", function () {
  cell8.textContent = "X";
});
cell9.addEventListener("dblclick", function () {
  cell9.textContent = "O";
});
cell9.addEventListener("click", function () {
  cell9.textContent = "X";
});

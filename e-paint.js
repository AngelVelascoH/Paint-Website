let grid = document.querySelector(".grid");
let square = document.getElementsByClassName("square");
let increase = document.getElementById("increase");
let cuadros = parseInt(prompt("Ingresa el numero de cuadros "));
let porcentaje = 100 / cuadros;
porcentaje = porcentaje + "%";
console.log(porcentaje);
let size = document.querySelector(":root");
size.style.setProperty("--width", porcentaje);
size.style.setProperty("--height", porcentaje);
increase.addEventListener("click", () => {
  for (let x = 0; x < cuadros * cuadros; x++) {
    grid.innerHTML = grid.innerHTML + "<div class='square'></div>";
  }
});

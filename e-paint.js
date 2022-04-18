let grid = document.querySelector(".grid");
let square = document.getElementsByClassName("square");
let increase = document.getElementById("increase");
var selector = document.getElementsByClassName("main-input")[0];
var options = document.getElementsByClassName("grid-option");
var values = [5, 10, 20, 40];
let size = document.querySelector(":root");
var porcentaje = 0;
var eraser = document.getElementById("erase");
var cuadros = 0;
var color_picker = document.getElementById("color-picker");
var color_selector = document.getElementById("color-pick");
var actual_color = getComputedStyle(document.documentElement).getPropertyValue(
  "--colorPaint"
);
function setOptions() {
  document.querySelectorAll(".grid-option").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (item.id == "size-1") {
        paintGrid(5);
      }
      if (item.id == "size-2") {
        paintGrid(10);
      }
      if (item.id == "size-3") {
        paintGrid(20);
      }
      if (item.id == "size-4") {
        paintGrid(30);
      }
    });
  });
}
increase.addEventListener("click", () => {
  grid.innerHTML = `<div class="main-input">
  <div class="input-label">
    <h1>Please select the size of the grid</h1>
  </div>
  <div class="text-box">
    <div class="grid-option" id="size-1">5x5</div>
    <div class="grid-option" id="size-2">10x10</div>
    <div class="grid-option" id="size-3">20x20</div>
    <div class="grid-option" id="size-4">30x30</div>
  </div>
  <div class="text-label">
    <h1>
      Use <i class="fa-solid fa-paintbrush"></i> to change the grid
      size.
    </h1>
  </div>
</div>`;

  setOptions();
});
/**/
function paint() {
  document.querySelectorAll(".square").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      item.style.backgroundColor = actual_color;
    });
  });
}
function paintGrid(cuadros) {
  document.getElementById("cuadrados").innerHTML = cuadros;
  porcentaje = 100 / cuadros;
  porcentaje = porcentaje + "%";
  size.style.setProperty("--width", porcentaje);
  size.style.setProperty("--height", porcentaje);
  grid.innerHTML = "";
  for (let x = 0; x < cuadros * cuadros; x++) {
    grid.innerHTML = grid.innerHTML + "<div class='square'></div>";
  }
  paint();
}
eraser.addEventListener("click", function (e) {
  if (document.getElementById("cuadrados").innerHTML === "") {
    return;
  } else {
    var cuadros = document.getElementById("cuadrados").innerHTML;
    paintGrid(cuadros);
  }
});
color_picker.addEventListener("input", function (e) {
  color_selector.style.color = e.target.value;
  actual_color = e.target.value;
});
setOptions();

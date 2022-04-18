let darkModeToggler = document.querySelector(".dark-toggler");
let theme = "light";
const toggler = function (mode) {
  if (mode === "light") {
    document.body.classList.add("dark-mode");
    document.querySelector(":root").style.setProperty("--border", "#e3e3e3");
    document.querySelector(":root").style.setProperty("--colorPaint", "black");
    if (actual_color == " white") {
      actual_color = "black";
    }
    document.querySelector(":root").style.setProperty("--borderColor", "white");
    theme = "dark";
  } else {
    document.body.classList.remove("dark-mode");
    document.querySelector(":root").style.setProperty("--colorPaint", "white");
    if (actual_color === "black") {
      actual_color = " white";
    }
    document.querySelector(":root").style.setProperty("--border", "black");
    document.querySelector(":root").style.setProperty("--borderColor", "gray");
    theme = "light";
  }
};

darkModeToggler.addEventListener("click", () => {
  toggler(theme);
});

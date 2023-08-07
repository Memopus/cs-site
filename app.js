const icon = document.querySelector(".icon");
const responsiveDiv = document.querySelector(".responsive-nav");

icon.addEventListener("click", () => {
  if (responsiveDiv.classList.contains("active")) {
    responsiveDiv.style.display = "none";
    responsiveDiv.classList.remove("active");
  } else if (!responsiveDiv.classList.contains("active")) {
    responsiveDiv.style.display = "block";
    responsiveDiv.classList.add("active");
  }
});
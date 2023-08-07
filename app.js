const icon = document.querySelector(".icon");
const responsiveDiv = document.querySelector(".responsive-nav");

icon.addEventListener("click", () => {
  if (responsiveDiv.classList.contains("active")) {
    responsiveDiv.style.display = "none";
    responsiveDiv.classList.remove("active");
    icon.classList.remove("fa-x");
    icon.classList.add("fa-bars");
  } else if (!responsiveDiv.classList.contains("active")) {
    responsiveDiv.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
    responsiveDiv.classList.add("active");
  }
});

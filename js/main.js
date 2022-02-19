/* SHOW MENU */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  console.log(toggle, nav);

  // Validate variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // Add show-menu class to the div tag with nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Remove show-menu class when when click on each nav__link
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Scroll sections active link */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* SHOW SCROLL TOP */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 200 viewport height, add show-scroll class to the a tag with the scroll
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollTop);

/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Obtain the current theme the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bxs-moon" : "bxs-sun";

// Validate if user previously chose a topic
if (selectedTheme) {
  // If validation is fulfilled, ask what mode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bxs-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and current icon the user chooses
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* Show SlideShow */

// Thumbnail image controls
function currentSlide(n, no) {
  showSlides(slideIndex = n, no);
}

var slideIndex = [1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3"]
var dotID = ["dot0", "dot1", "dot2", "dot3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotID[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}

/* SHOW PROJECT TABS */
function openContent(object, fieldName) {
  var x = document.getElementsByClassName("section-title");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active-link");
  }
  object.classList.add("active-link");
  var i;
  var x = document.getElementsByClassName("field");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(fieldName).style.display = "grid"; 

}
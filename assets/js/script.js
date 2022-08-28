// Navbar
const menuToogle = document.querySelector(".menu-toogle input");
const nav = document.querySelector("nav ul");
const body = document.querySelector("body");

menuToogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  body.classList.toggle("slide");
});

// Scroll top
const toTop = document.querySelector("#scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// scroll spy
let article = document.querySelectorAll("article");
let navLinks = document.querySelectorAll("ul li a");

window.onscroll = () => {
  article.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("ul li a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

// Create sliding effect
// const htmlTag = document.documentElement;

// // window.document.onload = addSlide();
// // window.onload = addSlide;

// function addSlide() {
//   htmlTag.className = "slide-in";
// }

// SELECT DOM ITEMS
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navIcon = document.querySelector(".fa-bars");
const navItems = document.querySelectorAll(".nav-item");

// SET INITIAL STATE OF MENU
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    navIcon.className = "fa fa-close fa-2x";
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    navIcon.className = "fa fa-bars fa-2x";
    menu.classList.remove("show");
    menuBtn.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set the menu state
    showMenu = false;
  }
}

function openAbout() {
  window.location = "about.html";
}

function openProjects() {
  window.location = "projects.html";
}

function openContact() {
  window.location = "contact.html";
}

function openIndex() {
  window.location = "index.html";
}

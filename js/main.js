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

let projects={
 "webapps":[ 
  {"href":{"github":"https://github.com/Ridwyn/MovieVue","live":"https://ridwyn.github.io/MovieVue/"},"src":{"png":"img/myprojects/project5.png","webp":"img/myprojects/project5.webp"},},
  {"href":{"github":"https://github.com/Ridwyn/MicroBlog_flask_mongodb","live":"https://microblog2019.herokuapp.com/"},"src":{"png":"img/myprojects/project1.png","webp":"img/myprojects/project1.webp"},},
  {"href":{"github":"https://github.com/Ridwyn/TravelAgencyTheme","live":"https://ridwyn.github.io/TravelAgencyTheme/"},"src":{"png":"img/myprojects/project2.png","webp":"img/myprojects/project2.webp"},},
  {"href":{"github":"https://github.com/Ridwyn/restauranttheme","live":"https://ridwyn.github.io/restauranttheme/"},"src":{"png":"img/myprojects/project4.png","webp":"img/myprojects/project4.webp"},},
  {"href":{"github":"https://github.com/Ridwyn/ridwyn.github.io","live":"https://ridwyn.github.io/#/"},"src":{"png":"img/myprojects/project6.png","webp":"img/myprojects/project6.webp"},},
          ],
"extensions":[ 
            {"href":{"chrome":"https://chrome.google.com/webstore/detail/excite/fablabeblioinlnghalebdlabpdcfadd","moz":"https://addons.mozilla.org/en-GB/firefox/addon/excite/"},"src":{"png":"img/myprojects/project7.png","webp":"img/myprojects/project7.webp"},}
      ]
}

if(window.location.pathname=="/projects.html"){
  var projetcsUl = document.querySelector(".webapps");
  var extensionsUl = document.querySelector(".extensions");
  projetcsUl.innerHTML= projects.webapps.map((item)=>{
    return ` 
    <div class="item">
        <a href="${item.href.live}" aria-label="LiveDemo"> 
          <picture>
            <source srcset="${item.src.webp}" type="image/webp">
            <source srcset="${item.src.png}" type="image/png"> 
            <img src="${item.src.png}" alt="Alt Text!">
          </picture>
        </a>
        <a href="${item.href.live}" aria-label="Livedemo" target="_blank" class="btn light"><i class="fa fa-eye"></i>  Live Demo</a>
        <a href="${item.href.github}" aria-label="Github" target="_blank" class="btn dark"><i class="fa fa-github"></i> Github</a>
        </div>`
  }).join(" ");
  // extensions
  extensionsUl.innerHTML=  projects.extensions.map((item)=>{
    return ` 
    <div class="item">
          <picture>
            <source srcset="${item.src.png}" type="image/png"> 
            <img src="${item.src.png}" alt="Alt Text!">
          </picture>

        <a href="${item.href.chrome}" target="_blank" aria-label="Livedemo" class="btn light"><i class="fa fa-chrome"></i>  Chrome</a>
        <a href="${item.href.moz}" target="_blank" aria-label="Github" class="btn dark"><i class="fa fa-firefox"></i> Mozilla</a>
        </div>`
  }).join(" ");
}


// Menu items
let menuItems=[
  {'href':'/index.html','text':'Home'},
  {'href':'/about.html','text':'About Me'},
  {'href':'/projects.html','text':'Projects'},
  {'href':'/contact.html','text':'Get In Touch'}
]

menuNav.innerHTML=menuItems.map((item)=>{
  return `<li class="nav-item">
  <a href="${item.href}" aria-label="About Me">${item.text}</a>
  </li> `
}).join(" ")

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

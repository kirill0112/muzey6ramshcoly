let burger = document.querySelector(".burger");
let menu = document.querySelector("ul");
let main = document.querySelector("main");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");



burger.addEventListener("click", run);

function run(){
    burger.classList.toggle("active");
    menu.classList.toggle("show");
    main.classList.toggle("shadow");
}

const toTopBtn = document.getElementById('toTopBtn');

// Показывать кнопку при прокрутке вниз
window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
};

// Прокрутка вверх при клике
toTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

logo.addEventListener("click", theme);

let condition = false;

function theme(){
    if(condition == false){
        header.style.backgroundColor = "#595858";
        main.style.backgroundColor = "#1c1b1b";
        condition = true;
    }
    else{
        header.style.backgroundColor = "rgb(0, 145, 246)";
        main.style.backgroundColor = "rgb(2, 152, 53)";
        condition = false;
    }
}
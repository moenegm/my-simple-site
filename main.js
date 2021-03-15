// getting items from the DOM
const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector(".menu");
const myPortrait = document.querySelector(".myPortrait");
const menuItems = document.querySelector(".menuItems");
const navItem = document.querySelectorAll(".navItem");
const menuWrapper = document.querySelectorAll(".menuWrapper");
const photography = document.querySelector("#photography");

// Setting Initial State of Menue
let showMenu = false;

menuButton.addEventListener("click", openMenu);

function openMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuWrapper.forEach(item => item.classList.add("show"));
    myPortrait.classList.add("show");
    menuItems.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));
    photography.classList.add("show");
    //new menue state
    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuWrapper.forEach(item => item.classList.remove("show"));
    myPortrait.classList.remove("show");
    menuItems.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));
    photography.classList.remove("show");

    //new menue state
    showMenu = false;
  }
}
//------------------------photography slide show---------------------------------
let slider = document.querySelectorAll(".imgWrapper");
leftArrow = document.querySelector(".leftArrow");
rightArrow = document.querySelector(".rightArrow");
current = 0;

//clears images
function reset() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
}
// starts slider
function startSlide() {
  reset();
  slider[0].style.display = "block";
}
// show slide left
function slideLeft() {
  reset();
  slider[current - 1].style.display = "block";
  current--;
}
// show slide right
function slideright() {
  reset();
  slider[current + 1].style.display = "block";
  current++;
}
//left arrow click
leftArrow.addEventListener("click", function() {
  if (current === 0) {
    current = slider.length;
  }
  slideLeft();
});
// right arrow click
rightArrow.addEventListener("click", function() {
  if (current === slider.length - 1) {
    current = -1;
  }
  slideright();
});
startSlide();

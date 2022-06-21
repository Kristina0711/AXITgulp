// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block"
}
span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const tabBtnEl = document.querySelectorAll(".tabs__link");


tabBtnEl.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    var i, tabs__content, tabs__link;
    tabs__content = document.getElementsByClassName("tabs__content");
    for (i = 0; i < tabs__content.length; i++) {
        tabs__content[i].style.display = "none";
    }
    tabs__link = document.getElementsByClassName("tabs__link");
    for (i = 0; i < tabs__link.length; i++) {
        tabs__link[i].className = tabs__link[i].className.replace(" tabs__link_active", "");
    }
    document.getElementById(evt.currentTarget.dataset.tab).style.display = "block";
    evt.currentTarget.className += " tabs__link_active";
  });
});



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");

headerBurger.addEventListener("click", function (event) {
  headerBurger.classList.toggle("burger_closed");
  headerNav.classList.toggle("header__nav_opened");
});




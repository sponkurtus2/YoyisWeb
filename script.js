// Navbar effects
const nav = document.querySelector("nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
// Navbar effects close

// Navbar For Mobile responsive
var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list");

tglbtn.addEventListener("click", () => {
  navlst.classList.toggle("active");
});
// Navbar For Mobile responsive close

//Cards

$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show").removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this).css({ zIndex: zindex }).addClass("show");
      }

      zindex++;
    } else {
      // no cards in view
      $("div.cards").addClass("showing");
      $(this).css({ zIndex: zindex }).addClass("show");

      zindex++;
    }
  });
});

//Cards close

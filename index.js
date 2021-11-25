document.querySelector(".fa-bars").addEventListener("click", function() {
    let x = document.querySelector('.second_nav');
    let y = document.querySelector('.er_image');
    let z = document.querySelector('.name');
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.marginTop = "30px";
      z.style.top = "35vh";
    } else {
      x.style.display = "none";
      y.style.marginTop = "1px";
      z.style.top = "30vh";
    }
  });


  setInterval(function(){ 

    let x = document.querySelector('.web_developer');
    let y = document.querySelector('.ruby_developer');
    let  z = document.querySelector('.java_script');
    let  r = document.querySelector('.react');
    let  red = document.querySelector('.redux');
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";

    } else if (y.style.display === "block"){
      y.style.display = "none";
      z.style.display = "block";
    } else if (z.style.display === "block"){
      r.style.display = "block";
      z.style.display = "none";
    }
    else if (r.style.display === "block") {
      r.style.display = "none";
      red.style.display = "block";
    }

    else {
      red.style.display = "none";
      x.style.display = "block";
    }

}, 3000);


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}











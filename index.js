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
    if (x.style.display === "block") {
      x.style.display = "none";
      z.style.display = "none";
      y.style.display = "block";

    } else if (y.style.display === "block"){
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    }

}, 3000);

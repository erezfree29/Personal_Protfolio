document.querySelector(".fa-bars").addEventListener("click", function() {
    let x = document.querySelector('.second_nav');
    let y = document.querySelector('.er_image');
    let z = document.querySelector('.name');
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.marginTop = "30px";
      z.style.top = "44vh";
    } else {
      x.style.display = "none";
      y.style.marginTop = "1px";
      z.style.top = "39vh";
    }
  });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.boxShadow = "rgba(0,0,0,50%) 0px 0px 10px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 30%)";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "2rem";
    document.getElementById("header").style.height = "10vh";
  } else {
    document.getElementById("header").style.fontSize = "1rem";
    document.getElementById("header").style.height = "13vh";
  }
}

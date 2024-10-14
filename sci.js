window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "3rem";
    document.getElementById("header").style.height = "15vh";
    document.getElementById("header").style.zIndex = "2";

  } else {
    document.getElementById("header").style.height = "13vh";
    document.getElementById("header").style.fontSize = "1.54rem";
  }
}
// Code taken from https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp - tutorial
// When the user scrolls down 100px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("services-scroll").style.top = "0";
    document.querySelector(".navbar").style.top = "-100px";
  } else {
    document.getElementById("services-scroll").style.top = "-150px";
    document.querySelector(".navbar").style.top = "0";
  }
}

// Services scrollspy
$('body').scrollspy({ target: '#services-scroll' });

// Dynamic footer year
document.getElementById("year").innerHTML = new Date().getFullYear();
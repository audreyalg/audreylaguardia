// back to top button
let myBtn = document.getElementById("topBtn");

window.onscroll = function() {
  scroll()
};

function scroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
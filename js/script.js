var btnTop = document.querySelector('#back-top');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
}
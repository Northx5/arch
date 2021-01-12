$(document).ready(function () {
  $(".banner__slider").slick({
    arrows: false,
    autoplay: false,
    dots: false,
  });

  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("year__placeholder").innerHTML = year;
});

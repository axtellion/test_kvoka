$(document).ready(function () {
  $(".slider__list").slick({
    slidesToShow: 4,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
		
$(document).ready(function () {
  $(".testimonials__list").slick({
    slidesToShow: 3,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
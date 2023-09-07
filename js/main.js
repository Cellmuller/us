//gsap
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  gsap.set(".category-item", { autoAlpha: 0, y: 50 });
  var tl = gsap.timeline();
  tl.staggerTo(
    ".category-item",
    1,
    { autoAlpha: 1, y: 0, ease: "power1.out" },
    0.5
  );
  new ScrollMagic.Scene({
    triggerElement: ".category-item",
    reverse: false,
  })
    .setTween(tl)
    .addTo(controller);
});

//カルーセル
$(document).ready(function () {
  $(".carousel-area").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 3,
    prevArrow: false, // 前への矢印を非表示にする
    nextArrow: false, // 次への矢印を非表示にする
    responsive: [{
      breakpoint: 480,
           settings: {
                slidesToShow: 1,
           }
      }
 ]
  });
});

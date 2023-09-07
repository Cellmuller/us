// ハンバーガーメニュー
$(function () {
  $(".nav_toggle").click(function () {
    $(".nav_toggle, header > nav").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
});

//ヘッダーアニメーション
var tl = gsap.timeline();
tl.from(".header-nav-text,.header-logo", {
  duration: 1,
  x: -25,
  opacity: 0,
  stagger: 0.1,
});

tl.from("header > div > button", {
  duration: 0.1,
  y: -25,
  opacity: 0,
  stagger: 0.3,
});
//ヘッダーホバー
$(document).ready(function () {
  $(" header > nav > ul > li:nth-child(1)").hover(
    function () {
      $(".hover-content,header > nav > ul > li:nth-child(1)").fadeIn();
    },
    function () {
      $(".hover-content").fadeOut();
    }
  );
});

    // カテゴリーメニューをトグルする関数
    function toggleCategoryMenu() {
      var categoryMenu = document.getElementById("category-menu");
      categoryMenu.classList.toggle("active");
  }

  // カテゴリートグルリンクにクリックイベントリスナーを追加
  var categoryToggleLink = document.getElementById("categoryToggle");
  categoryToggleLink.addEventListener("click", toggleCategoryMenu);
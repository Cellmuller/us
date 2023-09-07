document.addEventListener("DOMContentLoaded", function () {
  var $tab__link = $(".tab__link");
  var $tab_body_item = $(".tab-body__item");
  $tab__link.on("click", function (e) {
    var target = $(e.currentTarget);
    //タブの表示非表示
    $tab__link.removeClass("on");
    target.addClass("on");
    //タブの中身の表示非表示
    var num = target.data("tab-body");
    $tab_body_item.removeClass("on");
    $(".tab-body__item--" + num).addClass("on");
  });

  // サブタブ用のクリックリスナー
  var $sub_tab__link = $(".sub-tab__link");
  var $sub_tab_body_item = $(".sub-tab-body__item");
  $sub_tab__link.on("click", function (e) {
    var target = $(e.currentTarget);
    //サブタブの表示非表示
    $sub_tab__link.removeClass("on");
    target.addClass("on");
    //サブタブの中身の表示非表示
    var num = target.data("sub-tab-body");
    $sub_tab_body_item.removeClass("on");
    $(".sub-tab-body__item--" + num).addClass("on");
  });
});

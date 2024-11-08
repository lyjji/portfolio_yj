$(document).ready(function () {
  // header 메뉴
  $("header ul li").click(function () {
    let i = $(this).index();

    $("header ul li").removeClass("on");
    $(this).addClass("on");

    $("#sNav a").removeClass("on");
    $("#sNav a").eq(i).addClass("on");
  });

  //   전체 네비
  $("#sNav a").click(function () {
    let i = $(this).index();

    $("#sNav a").removeClass("on");
    $(this).addClass("on");

    $("header ul li").removeClass("on");
    $("header ul li").eq(i).addClass("on");
  });

  //   스크롤
  $(window).scroll(function () {
    let sc = $(document).scrollTop();

    if (0 < sc) {
      $("header").addClass("scon");
    } else {
      $("header").removeClass("scon");
    }

    let homeT = $("#home").offset().top - 250;
    let ameT = $("#aboutme").offset().top - 250;
    let portT = $("#portfolio").offset().top - 250;
    let designT = $("#design").offset().top - 250;

    if (homeT <= sc && sc < ameT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(0).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(0).addClass("on");

      $("section").removeClass("scon");
    } else if (ameT <= sc && sc < portT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(1).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(1).addClass("on");

      $("section").removeClass("scon");
      $("#aboutme").addClass("scon");
    } else if (portT <= sc && sc < designT) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(2).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(2).addClass("on");

      $("section").removeClass("scon");
    } else if (designT <= sc) {
      $("header ul li").removeClass("on");
      $("header ul li").eq(3).addClass("on");

      $("#sNav a").removeClass("on");
      $("#sNav a").eq(3).addClass("on");

      $("section").removeClass("scon");
      $("#design").addClass("scon");
    }
  });

  //   aboutme circle hover
  //   $(".circle").mouseover(() => {
  //     $(".circle").css({ transform: "rotateY(180deg)" });
  //   });

  //   $(".circle").mouseleave(() => {
  //     $(".circle").css({ transform: "rotateY(0deg)" });
  //   });

  //   modal 연결
  $(".swiper-slide .opmodal").click(() => {
    $("#modal").addClass("open");
  });

  $(".mbox button").click(() => {
    $("#modal").removeClass("open");
  });
});

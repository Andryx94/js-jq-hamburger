// $(".fa-bars").click(
//   function() {
//     $(".hamburger-menu").show(200);
//   }
// );
//
// $(".fa-times").click(
//   function() {
//     $(".hamburger-menu").hide(200);
//   }
// );

$(".header-right a").click(
  function() {
    $(".hamburger-menu").addClass("active");
  }
);

$(".close").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);

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

$(".fa-bars").click(
  function() {
    $(".hamburger-menu").addClass("active");
  }
);

$(".fa-times").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);

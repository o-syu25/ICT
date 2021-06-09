$(function() {
  let open = "open"; // class

  // menu open close
  $(".toggle-btn").on("click", function() {
    if(!$(".site-header").hasClass(open)) {
      $(".site-header").addClass(open);
    }

    else {
      $(".site-header").removeClass(open);
    }
  });

  // mask close
  $("#mask").on("click", function() {
    $(".site-header").removeClass(open);
  });
});

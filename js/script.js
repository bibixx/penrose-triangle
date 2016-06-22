$(document).ready(function() {
  $(".animating").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
    var $t = $(this)
    if( e.originalEvent.animationName == "hide-anim" ){
      $t.removeClass("animating")
      setTimeout(function(){ $t.addClass("animating") }, 500)
    }
  });
});

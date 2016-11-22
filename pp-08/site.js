<<<<<<< HEAD
$.noConflict();
(function(){
$(document).ready(
  function($) {
=======
$(document).ready(
  function() {
>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');

    if (typeof(window.$) !== "undefined") {
      console.log('jQuery still controls the $ variable');
    } else {
      console.log('Nice work! jQuery no longer controls the $ variable');
    }

  }
<<<<<<< HEAD
})(jQuery);
=======
);

>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa

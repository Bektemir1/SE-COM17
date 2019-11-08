(function($) {
    "use strict";
    $(window).scroll(function() {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $(".header_area").addClass("menu_fixed  animated fadeInDown");
        } else {
            $(".header_area").removeClass("menu_fixed animated fadeInDown");
        }
    });
})(jQuery);

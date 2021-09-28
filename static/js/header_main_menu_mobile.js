(function($) {
    "use strict";
    $(window).resize(function(){
        if ( $('.header .main-menu').is(":visible") == false && $('.header .menu-button').is(":visible") == false ) {
            $('.header .main-menu').show();
        } else if ( $('.header .main-menu').is(":visible") && $('.header .menu-button').is(":visible")  ) {
            $('.header .main-menu').hide();
        }
    });

    $(document).click(function() {
        if ( $('.header .main-menu').is(":visible") && $('.header .menu-button').is(":visible") ) {
            $('.header .main-menu').toggle('slow');
        }
    });
    $('.header .menu-button').on('click', function () {
        $('.header .main-menu').toggle('slow');
        event.stopPropagation();
    });
    $(".header .main-menu").click(function(event) {
        if ( $('.header .main-menu').is(":visible") ) {
            event.stopPropagation();
        }
    });
})(window.jQuery);
$(document).ready(function () {

    // a call to Materialize sidenav
    $('.sidenav').sidenav();
    // a call to Materialize parallax
    $('.parallax').parallax(
        {
            // The minimum width of the screen, in pixels, where the parallax functionality starts working.
            // responsiveThreshold: 470
            responsiveThreshold: 740
        });
    // a call to Materialize tap target
    $('.tap-target').tapTarget();
    // a call to Materialize tool tip
    $('.tooltipped').tooltip();
    // a call to Materialize materialbox
    $('.materialboxed').materialbox();

    $('.carousel.carousel-slider').carousel({
        fullWidth: false,
        indicators: true
    });

    // a call to Materialize sidenav
    $('.sidenav').sidenav();

    //   $('#carousel-example-generic').on('slid.bs.carousel', function (event) {
    //     var nextactiveslide = $(event.relatedTarget).index();
    //     var $btns = $('.carousel-buttons');
    //     var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
    //     $btns.find('.img-circle').removeClass('active');
    //     $active.find('.img-circle').addClass('active');
    // });      
});
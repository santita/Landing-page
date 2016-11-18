$(function () {

    //    console.log('works');
    //--------- Sticky menu ------------
    var nav = $('#navigation');
    //    console.log(nav);    
    var top = nav.offset().top;
    $(window).on('scroll resize', function () {
        console.log('ok');

        var scrollTop = $(document).scrollTop();
        if (scrollTop > top) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    });



    //------------- Skills ---------
    var skills = $('.barColor');
    var skillsProgress = function () {
        skills.each(function () {
            var value = $(this).data('skill');
            console.log(skills);
            console.log("value" + value);
            $(this).animate({
                width: value
            }, 8000)
        });
    }
    skillsProgress();

});

//----------- Slider -----------------

function slider() {

    $('#slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        startSlide:3,
        slideMargin: 10,
        speed: 500,
        auto: true,
    });
}
slider();

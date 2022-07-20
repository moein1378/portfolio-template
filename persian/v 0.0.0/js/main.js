$(document).ready(function() {

    /*** header section events ***/
    function follow_links_hover(child_number) {
        $(".links_area:nth-child(" + child_number + ") .follow_icons").mouseenter(function() {
            $(".links_area:nth-child(" + child_number + ") .follow_description").removeClass("animate__rotateOutUpRight").addClass("animate__rotateInDownLeft");
        });

        $(".links_area:nth-child(" + child_number + ")").mouseleave(function() {
            $(".links_area:nth-child(" + child_number + ") .follow_description").removeClass("animate__rotateInDownLeft").addClass("animate__rotateOutUpRight");
        });
    }

    for (let index = 1; index <= 4; index++) {
        follow_links_hover(index);
    }
    /*** header section events end***/

    /*** projects section events ***/

    setInterval(() => {

        function textsIn_slides_events(i) {
            if ($("#projects .splide__pagination li:nth-child(" + i + ")" + " button").hasClass("is-active")) {
                $("#p_slide" + i + " .p_slide_title").removeClass('animate__fadeOutRightBig').addClass('animate__fadeInLeftBig');
                $("#p_slide" + i + " .project_explain h3").removeClass('animate__flipOutX').addClass('animate__flipInX');
                $("#p_slide" + i + " .project_explain p").removeClass('animate__fadeOutDown').addClass('animate__fadeInUp');
                $("#p_slide" + i + " .project_explain .see_project_btn").removeClass('animate__fadeOutLeftBig').addClass('animate__fadeInRightBig');
            } else {
                $("#p_slide" + i + " .p_slide_title").removeClass('animate__fadeInLeftBig').addClass('animate__fadeOutRightBig');
                $("#p_slide" + i + " .project_explain h3").removeClass('animate__flipInX').addClass('animate__flipOutX');
                $("#p_slide" + i + " .project_explain p").removeClass('animate__fadeInUp').addClass('animate__fadeOutDown');
                $("#p_slide" + i + " .project_explain .see_project_btn").removeClass('animate__fadeInRightBig').addClass('animate__fadeOutLeftBig');
            }
        }
        for (let index = 1; index <= 3; index++) {
            textsIn_slides_events(index);
        }

    }, 500);

    setInterval(() => {
        if ($("#pSlider_animate_shape div").hasClass("animate__bounceInDown")) {
            $(".pSlider_animate_shape").removeClass("animate__bounceInDown").addClass("animate__bounceOut");
        }
    }, 2000);


    /*** projects section events end***/


});

/***slider of projects section adjusts ***/
document.addEventListener('DOMContentLoaded', function() {
    new Splide('#projects_slider', {
        type: 'fade',
        rewind: true,
        loop: true,
        speed: 2000,
        autoplay: true,
        interval: 3000,
    }).mount();
});
/***slider of projects section adjusts end***/

/***slider of resume section adjusts ***/
document.addEventListener('DOMContentLoaded', function() {
    new Splide('#resume_slider', {
        rewind: true,
        loop: true,
        speed: 1000,
        autoplay: true,
        interval: 6000,
        drag: true,
    }).mount();
});
/***slider of resume section adjusts end***/
var Kanzen = window.Kanzen || (window.Kanzen = {});

Kanzen.Init = () => {
    console.log("abc1");
    Kanzen.effect();
    $("a[href='#top']").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })
};

Kanzen.effect = () => {
    $(window).scroll(function () {
        $('#debug').html($(window).scrollTop());
        if ($(window).scrollTop() > 100) {
            $("#left_right_div").animate({marginLeft: '100px'}, 900);
            $("#right_left_img").animate({marginRight: '100px'}, 900);
        }
    });
}

window.addEventListener("load", Kanzen.Init(), false);
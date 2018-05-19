window.count_down = new Date("Sep 5, 2019 15:37:25");

window.sr = ScrollReveal();
var Kanzen = window.Kanzen || (window.Kanzen = {});

Kanzen.Init = () => {
    AOS.init();
    Kanzen.commponent();
    Kanzen.carousel();
    Kanzen.count_down_timer();
    Kanzen.videoJS();
};

Kanzen.commponent = () => {
    $("a[href='#top']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 0);
        return false;
    });

    $('.c-fanfare li a').hover(function () {
        $(this).animateCss('rotateIn', function () {

        });
    }, function () {

    });
}

Kanzen.carousel = () => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    });
}

Kanzen.videoJS = () => {
    $('.btn_play').on('click', function (evt) {
        evt.preventDefault();
        var el = $(this);
        el.closest('.c-panel').addClass('playing');
        var video = el.closest('.c-panel').find('video').get(0);
        if(video.paused) {
            video.play();
        }
        $(video).bind("ended", function() {
            el.closest('.c-panel').removeClass('playing');
        });
    });
}

Kanzen.count_down_timer = () => {
    var countDownDate = window.count_down.getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days < 10) days = '0' + days;
        if (hours < 10) hours = '0' + hours;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

window.addEventListener("load", Kanzen.Init(), false);


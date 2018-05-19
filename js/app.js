window.count_down = new Date("Sep 5, 2019 15:37:25");
// JavaScript
window.sr = ScrollReveal();
var Kanzen = window.Kanzen || (window.Kanzen = {});


Kanzen.Init = () => {
    $("a[href='#top']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 0);
        return false;
    });
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

    $('.c-fanfare li a').hover(function () {
        $(this).animateCss('rotateIn', function () {

        });
    }, function () {

    });

    /*$(".c-img-prod:visible").addClass("animated fadeInLeft");
    $('.c-fanfare li a:visible').animateCss('rotateIn');
    $('.con-text:visible').animateCss('fadeInUp');
    $('.carousel .c-panel:visible').animateCss('zoomIn');
    $('.fanfare_updates .c_card:visible').animateCss('fadeInUp');
    $('.meet_our_team .item:visible').animateCss('fadeInUp');
    $('.advisor .item:visible').animateCss('fadeInUp');
    $('.strategic .item:visible').animateCss('zoomIn');*/
    Kanzen.count_down_timer();
    sr.reveal('.con-text');
    sr.reveal('.meet_our_team .item');
    sr.reveal('.advisor .item');
    sr.reveal('.fanfare_updates .c_card');
    sr.reveal('.strategic .item');
    sr.reveal('.carousel .c-panel');
};

Kanzen.count_down_timer = () => {
    // Set the date we're counting down to
    var countDownDate = window.count_down.getTime();

// Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days < 10) days = '0' + days;
        if(hours < 10) hours = '0' + hours;
        if(minutes < 10) minutes = '0' + minutes;
        if(seconds < 10) seconds = '0' + seconds;

        // Display the result in the element with id="demo"
        /*document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";*/

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

window.addEventListener("load", Kanzen.Init(), false);


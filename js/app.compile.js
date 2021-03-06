"use strict";

window.count_down = new Date("Sep 5, 2019 15:37:25");

window.sr = ScrollReveal();
var Kanzen = window.Kanzen || (window.Kanzen = {});

Kanzen.Init = function () {
    AOS.init();
    Kanzen.commponent();
    Kanzen.carousel();
    Kanzen.count_down_timer();
    Kanzen.videoJS();
    Kanzen.circle_xecu();
    //Kanzen.chart_ui();
    Kanzen.chart_working();
};

Kanzen.commponent = function () {
    $("a[href='#top']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });

    $('.c-fanfare li a').hover(function () {
        $(this).animateCss('rotateIn', function () {});
    }, function () {});
};

Kanzen.carousel = function () {
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

    var dot_len = $('.owl-dots').find('.owl-dot').length;
    //for
};

Kanzen.circle_xecu = function () {
    var radius = 130;
    var radius_icon = 250;
    var $center = $('.circle_xecu .inner .icon-center');
    var $list = $('.circle_xecu .inner li');
    var $inner = $('.circle_xecu .inner');
    var o_coors = {
        x: $center.offset().left - $inner.offset().left + $center.width() / 2,
        y: $center.offset().top - $inner.offset().top + $center.height() / 2
    };

    function toRadians(angle) {
        return angle * (Math.PI / 180);
    }

    var deg = -45;
    var deg_icon = 0;
    var icon_itn_dis = 0;
    for (var i = 0; i < $list.length; i++) {
        deg += 30;
        deg_icon += 36;
        $list.eq(i).find('a').css('left', o_coors.x + parseInt(Math.cos(toRadians(90 - deg)) * radius));
        $list.eq(i).find('a').css('top', o_coors.y - parseInt(Math.sin(toRadians(90 - deg)) * radius));

        $list.eq(i).find('.icon_itn').css('left', o_coors.x + parseInt(Math.cos(toRadians(deg_icon)) * radius_icon));
        $list.eq(i).find('.icon_itn').css('top', o_coors.y - parseInt(Math.sin(toRadians(deg_icon)) * radius_icon));
    }
};

Kanzen.videoJS = function () {
    $('.btn_play').on('click', function (evt) {
        evt.preventDefault();
        var el = $(this);
        el.closest('.c-panel').addClass('playing');
        var video = el.closest('.c-panel').find('video').get(0);
        if (video.paused) {
            video.play();
        }
        $(video).bind("ended", function () {
            el.closest('.c-panel').removeClass('playing');
        });
    });
};

Kanzen.chart_ui = function () {
    var chart = new CanvasJS.Chart("chart_anim", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Desktop Browser Market Share in 2016"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [{ y: 51.08, label: "Chrome" }, { y: 27.34, label: "Internet Explorer" }, { y: 10.62, label: "Firefox" }, { y: 5.02, label: "Microsoft Edge" }, { y: 4.07, label: "Safari" }, { y: 1.22, label: "Opera" }, { y: 0.44, label: "Others" }]
        }]
    });
    chart.render();
};

Kanzen.chart_working = function () {
    Highcharts.chart('chart_anim', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Contents of Highsoft\'s weekly fruit delivery'
        },
        subtitle: {
            text: '3D donut in Highcharts'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Delivered amount',
            data: [['Bananas', 8], ['Kiwi', 3], ['Mixed nuts', 1], ['Oranges', 6], ['Apples', 8], ['Pears', 4], ['Clementines', 4], ['Reddish (bag)', 1], ['Grapes (bunch)', 1]]
        }]
    });
};

Kanzen.count_down_timer = function () {
    var countDownDate = window.count_down.getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        var seconds = Math.floor(distance % (1000 * 60) / 1000);

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
};

window.addEventListener("load", Kanzen.Init(), false);
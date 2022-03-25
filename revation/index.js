//mousemove
$('.s2').on('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    $('.s2_circle1').css({ left: 400 - x / 30, bottom: 50 + y / 30 });
    $('.s2_circle2').css({ left: -100 + x / 40, top: 200 - y / 40 });
    $('.s2_circle3').css({ right: -50 - y / 30, top: 20 + y / 20 })
});

//imgslide
var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

$(document).ready(function () {
    $(".slideimg li").each(function () {
        $(this).css("left", banner_left);
        banner_left += $(this).width() + 230;
        $(this).attr("id", "content" + (++img_cnt));
    });

    last = img_cnt;
    startAction();

    $(".slide").hover(
        function () { stopAction(); },
        function () { startAction() });
});
function startAction() {
    interval = setInterval(function () {
        $(".slideimg li").each(function () {
            $(this).css("left", $(this).position().left - 1);
        });

        var first_content = $("#content" + first);
        var last_content = $("#content" + last);

        if (first_content.position().left < "-" + $(first_content).width()) {
            first_content.css("left", last_content.position().left + last_content.width() + 230);
            first++;
            last++;
            if (last > img_cnt) { last = 1; }
            if (first > img_cnt) { first = 1; }
        }
    }, 12);
}
function stopAction() {
    clearInterval(interval);
}


// page scroll
window.onload = function () {
    window.addEventListener("scroll", function (e) {
        scrollEvent();
    });
}
var scrollEvent = function () {
    var scroll = window.innerHeight + window.scrollY;

    var itemList = document.querySelectorAll("section");

    Array.prototype.forEach.call(itemList, function (section) {
        if (section.offsetTop < scroll) {
            section.classList.remove("animatable");
            section.classList.add("animated");
        } else {
            section.classList.remove("animated");
            section.classList.add("animatable");
        }

    })
}

// vegas

$(".mainimg").vegas({
    slides: [
        { src: "img/Re-main.jpeg" },
        { src: "img/re-main2.jpeg" },
        { src: "img/re-main3.jpeg" }
    ],
    timer: false,
    shuffle: true,
    transition: 'fade',
    delay: 3000
});

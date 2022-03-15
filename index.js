
const video = document.querySelectorAll('.video');
for (let item of video) {
    item.addEventListener('mouseenter', (e) => {
        e.currentTarget.querySelector('video').play();
    });
    item.addEventListener('mouseleave', (e) => {
        e.currentTarget.querySelector('video').pause();
    });
};

new Pageable('#wrapper', {
    animation: 1000,
    freeScroll: false,
    events: { mouse: false, touch: false },
    onscroll: function () {

    }
});


var colors = [
    // '#015c92',
    // '#2b8e9e',
    // '#e88607',
    // '#2a445e',
    // '#d9af27 ',
    // '#841e62'
    // '#568fa6',
    // '#100b1f',
    // // '#e89715',
    // '#cd9489',
    // '#5d1748',
    '#015c92',
    '#053c5e',
    '#cd9489',
    '#1f2933',
    '#85a3c5',

]
var wrapper = document.getElementById('wrapper');

wrapper.onwheel = changeBgColor;

var colorIndex = 0;
var scrollValue = 0;
var dateNow = Date.now();

function changeBgColor(e) {
    scrollValue += e.deltaY * 0.01;
    // text.textContent = Math.floor(scrollValue);

    timePassed = Date.now() - dateNow;
    if (scrollValue > 6 && timePassed > 1000) {

        deteNow = Date.now();
        colorIndex += 1;

        if (colorIndex > colors.length - 1) colorIndex = 0;
        colorIndex.textContent = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        scrollValue = 0;
    }

    if (scrollValue < -6 && timePassed > 1000) {
        dateNow = Date.now();
        colorIndex -= 1;
        if (colorIndex < 0) colorIndex = colors.length - 1;
        colorIndex.textContent = colors[colorIndex];
        wrapper.style.backgroundColor = colors[colorIndex];
        scrollValue = 0;
    }
    e.preventDefault();
}


var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: ".trigger0",
    triggerHook: 0.9,
    duration: "100%",
    offset: 50
})
    .setClassToggle(".trigger0", "visible")
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerHook: 0.9,
    duration: "100%",
    offset: 50
})
    .setClassToggle(".trigger1", "visible")
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".trigger2",
    triggerHook: 0.9,
    duration: "100%",
    offset: 50
})
    .setClassToggle(".trigger2", "visible")
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".trigger3",
    triggerHook: 0.9,
    duration: "100%",
    offset: 50
})
    .setClassToggle(".trigger3", "visible")
    .addTo(controller);

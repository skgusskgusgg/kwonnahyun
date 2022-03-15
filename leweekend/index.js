// mobile
$.ajax({
    url: "json/index1.json",
    dataType: "json",
    success: function (data) {
        console.log(data);
        if (data.length > 0) {
            for (let el in data) {
                let tags = data[el].tags;
                let desc1 = data[el].description1;
                let desc2 = data[el].description2;
                let url = data[el].url;
                console.log(desc1)
                $('.m1 .main_mobile').eq(el).prepend(`<img src = ${url}> <h3>${tags}</h3> <p>${desc1}</p> <p>${desc2}</p>`);
            }
        }
    }
});
$.ajax({
    url: "json/index2.json",
    dataType: "json",
    success: function (data2) {
        console.log(data2)
        if (data2.length > 0) {
            for (let el in data2) {
                let tags = data2[el].tags;
                let desc = data2[el].description;
                let url = data2[el].url;
                $('.m2  .main_mobile').eq(el).append(`<div><img src=${url}> <p class="tags2">${tags}</p> <p class="desc2"><a href="#">${desc}</a></p><div>`)
            }
        }
    }
});
$.ajax({
    url: "json/index3.json",
    dataType: "json",
    success: function (data3) {
        if (data3.length > 0) {
            for (let el in data3) {
                let tags = data3[el].tags;
                let p1 = data3[el].p1;
                let p2 = data3[el].p2;
                let url = data3[el].url;
                $('.m3 .main_mobile ').eq(el).append(`<img src =${url}> <a><h4>${tags}</h4></a> <p>${p1}</p> <p>${p2}</p>`)
            }
        }
    }
});
$.ajax({
    url: "json/index4.json",
    dataType: "json",
    success: function (data4) {
        if (data4.length > 0) {
            for (let el in data4) {
                let url = data4[el].url;
                let tags = data4[el].tags;
                $('.m4 .main_mobile').eq(el).append(`<img src=${url}> <p><a href ="#">${tags}<a></p>`)
            }
        }
    }
})

$.ajax({
    url: "json/index5.json",
    dataType: "json",
    success: function (data5) {
        if (data5.length > 0) {
            for (let el in data5) {
                let tags = data5[el].tags;
                let desc1 = data5[el].description1;
                let desc2 = data5[el].description2;
                let url = data5[el].url;
                $('.m1 .main_pc').eq(el).prepend(`<img src=${url}>  <h3>${tags}</h3> <p>${desc1}</p> <p>${desc2}</p>`)
            }
        }
    }
})
$.ajax({
    url: "json/index6.json",
    dataType: "json",
    success: function (data6) {
        if (data6.length > 0) {
            for (let el in data6) {
                let tags = data6[el].tags;
                let desc = data6[el].description;
                let url = data6[el].url;
                $('.m2 .main_pc').eq(el).append(`<div class="m2_pcbox"><img src=${url}> <p class="tags">${tags}</p> <p class="desc"><a href="#">${desc}</a></p><div>`)
            }
        }
    }
})
$.ajax({
    url: "json/index7.json",
    dataType: "json",
    success: function (data7) {
        if (data7.length > 0) {
            for (let el in data7) {
                let tags = data7[el].tags;
                let p1 = data7[el].p1;
                let p2 = data7[el].p2;
                let url = data7[el].url;
                $('.m3 .main_pc').eq(el).append(`<img src =${url}> <a><h4>${tags}</h4></a> <p>${p1}</p> <p>${p2}</p>`)
            }
        }
    }
})
$.ajax({
    url: "json/index8.json",
    dataType: "json",
    success: function (data8) {
        if (data8.length > 0) {
            for (let el in data8) {
                let url = data8[el].url;
                let tags = data8[el].tags;
                $('.m4 .main_pc').eq(el).append(`<img src=${url}> <p><a href ="#">${tags}<a></p>`)
            }
        }
    }
})
$(".headerimg").vegas({
    delay: 3500,
    slides: [
        { src: "images/plant2.png" },
        { src: "images/plant.png" }
    ],
    timer: false,
    animation: 'kenburnsUp',

});
$(".headerimg_m").vegas({
    delay: 3500,
    slides: [
        { src: "images/m1.png" },
        { src: "images/plant_m.png" },
    ],
    timer: false,
    animation: 'kenburnsUp',

})

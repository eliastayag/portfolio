var img1Div = document.querySelector("#img1"),
    clicks = 0
    navs = document.querySelectorAll(".nav"),
    mainImg = document.querySelector("#mainImg"),
    imgNum = 0,
    mtimer = null;

    console.log(navs);


navs[0].addEventListener("click", function(){
    clicks = clicks+1;
    console.log(clicks);
    //alert("hi");
    mainImg.src = "monk1.jpg";
});

navs[1].addEventListener("click", function(){
    clicks = clicks+1;
    console.log(clicks);
    mainImg.src = "monk2.jpg"
    //alert("hi");
});

navs[2].addEventListener("click", function(){
    clicks = clicks+1;
    console.log(clicks);
    mainImg.src = "monk3.jpg"
    //alert("hi");
});

navs[3].addEventListener("click", function(){
    if (imgNum < 3){
    imgNum = imgNum + 1;
    mainImg.src = "monk"+imgNum+".jpg";
    } else {
        imgNum = 0;
    }

});

navs[4].addEventListener("click", function(){
    imgNum = imgNum - 1;
    if (imgNum < 1) {
        imgNum = 3;
    }
    mainImg.src = "monk"+imgNum+".jpg";
})

navs[5].addEventListener("click", function(){
    if (mtimer == null){
    mtimer = setInterval(function(){
        imgNum = imgNum +1;
        if (imgNum > 3){
            imgNum = 1;
        }
        mainImg.src = "monk"+imgNum+".jpg";
    }, 1000)
}
})

navs[6].addEventListener("click", function(){
    clearInterval(mtimer);
    mtimer = null;
})

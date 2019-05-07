var img = "dsasa",
    bg = "";

function bgchange1() {
    img = "bg1";
    document.getElementById("ch1").style.backgroundImage = "url('i1.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('i2.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('i3.jpg')";
}
function bgchange2() {
    img = "bg2";
    document.getElementById("ch1").style.backgroundImage = "url('i4.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('i5.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('i6.jpg')";
}
function bgchange3() {
    img = "bg3";
    document.getElementById("ch1").style.backgroundImage = "url('i7.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('i8.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('i9.jpg')";
}
function bgchange4() {
    img = "bg4";
    document.getElementById("ch1").style.backgroundImage = "url('i10.jpg')";
    document.getElementById("ch2").style.backgroundImage = "url('i11.jpg')";
    document.getElementById("ch3").style.backgroundImage = "url('i12.jpg')";
}

function zoomchange1(){
    if (img == "bg1"){
        bg = "i1";
        document.getElementById("zoom").style.backgroundImage = "url('i1.jpg')";
    } else {
        if (img == "bg2"){
            bg = "i4";
        document.getElementById("zoom").style.backgroundImage = "url('i4.jpg')";
        } else {
            if (img =="bg3"){
            bg = "i7";
        document.getElementById("zoom").style.backgroundImage = "url('i7.jpg')";
            } else{
                if (img == "bg4"){
            bg = "i10";
                document.getElementById("zoom").style.backgroundImage = "url('i10.jpg')";
            } else {
                console.log("noimg");
            }
        }
    }
    }}

function zoomchange2(){
    if (img == "bg1"){
        bg = "i2";
        document.getElementById("zoom").style.backgroundImage = "url('i2.jpg')";
    } else {
        if (img == "bg2"){
        bg = "i5";
        document.getElementById("zoom").style.backgroundImage = "url('i5.jpg')";
        } else {
            if (img =="bg3"){
            bg = "i8"; 
        document.getElementById("zoom").style.backgroundImage = "url('i8.jpg')";
            } else{
                if (img == "bg4"){
                    bg = "i11";
                document.getElementById("zoom").style.backgroundImage = "url('i11.jpg')";
            } else {
                console.log("noimg");
            }
        }
    }
}}

function zoomchange3(){
    if (img == "bg1"){
        bg = "i3";
        document.getElementById("zoom").style.backgroundImage = "url('i3.jpg')";
    } else {
        if (img == "bg2"){
        bg = "i6";
        document.getElementById("zoom").style.backgroundImage = "url('i6.jpg')";
        } else {
            if (img =="bg3"){
        bg = "i9";
        document.getElementById("zoom").style.backgroundImage = "url('i9.jpg')";
            } else{
                if (img == "bg4"){
                bg = "i12";
                document.getElementById("zoom").style.backgroundImage = "url('i12.jpg')";
            } else {
                console.log("noimmg");
            }
        }
    }
}
}

function makebg(){
    if (bg == "i1"){
        document.getElementById("app").style.backgroundImage = "url('i1.jpg')";
    } else {
        if (bg == "i2"){
        document.getElementById("app").style.backgroundImage = "url('i2.jpg')";
    } else {
        if (bg == "i3"){
        document.getElementById("app").style.backgroundImage = "url('i3.jpg')";
    } else {
        if (bg == "i4"){
        document.getElementById("app").style.backgroundImage = "url('i4.jpg')";
    } else {
        if (bg == "i5"){
        document.getElementById("app").style.backgroundImage = "url('i5.jpg')"; 
    } else {
        if (bg == "i6"){
        document.getElementById("app").style.backgroundImage = "url('i6.jpg')";
    } else {
        if (bg == "i7"){
        document.getElementById("app").style.backgroundImage = "url('i7.jpg')";
    } else {
        if (bg == "i8"){
        document.getElementById("app").style.backgroundImage = "url('i8.jpg')";
    } else {
        if (bg == "i9"){
        document.getElementById("app").style.backgroundImage = "url('i9.jpg')";
    } else {
        if (bg == "i10"){
        document.getElementById("app").style.backgroundImage = "url('i10.jpg')";
    } else {
        if (bg == "i11"){
        document.getElementById("app").style.backgroundImage = "url('i11.jpg')";
    } else {
        if (bg == "i12"){
        document.getElementById("app").style.backgroundImage = "url('i12.jpg')";
        }
    }
}}}}}}}}}}} 
// i am sorry for this monstrosity

function prev() {
    if (img == "bg1"){
        bgchange4()
    } else {
        if (img == "bg2"){
            bgchange1()
        } else {
            if (img == "bg3"){
                bgchange2()
            } else {
                if (img == "bg4") {
                    bgchange3()
                }
            }
        }
    }
    
}

function next() {
    if (img == "bg1"){
        bgchange2()
    } else {
        if (img == "bg2"){
            bgchange3()
        } else {
            if (img == "bg3"){
                bgchange4()
            } else {
                if (img == "bg4") {
                    bgchange1()
                }
            }
        }
    }
    
}
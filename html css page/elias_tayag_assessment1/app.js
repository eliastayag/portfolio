function expand() {
    document.getElementById("preview").style.flex = "3";
}

function minimize(){
    document.getElementById("preview").style.flex = "50";
}

var img = "bg2";

function bgchange1() {
        document.getElementById("preview").style.backgroundImage = "url('bg1.jpg')";
}


function bgchange2(){
    document.getElementById("preview").style.backgroundImage = "url('bg2.jpg')";
}

function bgchange3(){
    document.getElementById("preview").style.backgroundImage = "url('bg3.jpg')";
}

function bgchange4(){
    document.getElementById("preview").style.backgroundImage = "url('bg4.jpg')";
}

function oopen(){
    if (document.getElementById("stickerDisplay").style.right == "0px"){
        document.getElementById("stickerDisplay").style.right = "-100px";
        console.log("close");
    } else { if (document.getElementById("stickerDisplay").style.right = "-100px"){
        document.getElementById("stickerDisplay").style.right = "0px";
        console.log("open");
    }
    }
}

function change(){
    if (document.getElementById("sticker").src = "st1.png"){
        document.getElementById("sticker").src = "st"+2+".png"; 
    } else {
        if (document.getElementById("sticker").src = "st2.png") {
            document.getElementById("sticker").src = "st"+3+".png"
        }
    }
} 

var thumbs = "1";
function next(){
    if (thumbs == "1"){
        thumbs = "2";
        console.log(thumbs);
        document.getElementById("thumb1").style.backgroundImage = "url('bg5.jpg')";
        document.getElementById("thumb2").style.backgroundImage = "url('bg6.jpg')";
        document.getElementById("thumb3").style.backgroundImage = "url('bg7.jpg')";
        document.getElementById("thumb4").style.backgroundImage = "url('bg8.jpg')";
    } else{
        thumbs == "2" 
        console.log(thumbs);
            thumbs = "2";
            document.getElementById("thumb1").style.backgroundImage = "url('bg9.jpg')";
            document.getElementById("thumb2").style.backgroundImage = "url('bg10.jpg')";
            document.getElementById("thumb3").style.backgroundImage = "url('bg11.jpg')";
            document.getElementById("thumb4").style.backgroundImage = "url('bg12.jpg')";

        }
    }

    function prev(){
        if (thumbs == "3"){
            thumbs = "2";
            console.log(thumbs);
            document.getElementById("thumb1").style.backgroundImage = "url('bg9.jpg')";
            document.getElementById("thumb2").style.backgroundImage = "url('bg10.jpg')";
            document.getElementById("thumb3").style.backgroundImage = "url('bg11.jpg')";
            document.getElementById("thumb4").style.backgroundImage = "url('bg12.jpg')";

        } else{
                thumbs = "1";
                console.log(thumbs);
                document.getElementById("thumb1").style.backgroundImage = "url('bg5.jpg')";
                document.getElementById("thumb2").style.backgroundImage = "url('bg6.jpg')";
                document.getElementById("thumb3").style.backgroundImage = "url('bg7.jpg')";
                document.getElementById("thumb4").style.backgroundImage = "url('bg8.jpg')";

            }
        }
    
    

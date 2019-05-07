function menuopen() {
    document.getElementById("menu").style.left = "0px";
}

function menuclose(){
    document.getElementById("menu").style.left = "-110px";
}

function reset(){
    document.getElementById("app").style.backgroundImage = "";
    document.getElementById("zoom").style.backgroundSize = "";
}

function showapp(){
    document.getElementById("main").style.display = "flex";
}

function hideapp(){
    document.getElementById("main").style.display = "none";
}

function zoomshow(){
    document.getElementById("zoomcontrols").style.display = "flex";
}
var zoom = 140;
function zoomin(){
    if (zoom <= 380){
    console.log(zoom);
    zoom = zoom+10;
    document.getElementById("zoom").style.backgroundSize = zoom +"%";
    }
}

function zoomout(){
    if (zoom >= 150){
    console.log(zoom);
    zoom = zoom-10;
    document.getElementById("zoom").style.backgroundSize = zoom +"%";
    }
}



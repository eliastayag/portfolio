var myBox = document.querySelector("#box");
var myNum = 200;
var myUnit = "px";
var expBut = document.querySelector("#exp");
var minBut = document.querySelector("#min");
var colBut = document.querySelector("#col");

var colorBut = document.querySelector("#color");
var r = 0;
var g = 0;
var b = 0;

document.querySelector("#but1").addEventListener("click", function(){
    myBox.style.width = myNum+myUnit;
    myBox.style.height = myNum+myUnit;
    //document.querySelector("#box").style.width = "1000px";
   // document.querySelector("#box").style.height = "1000px";
});

expBut.addEventListener("click", function(){
    console.log("before", myNum);
    myNum = myNum + 30;
    console.log("after", myNum);
    myBox.style.width = myNum+myUnit;
    myBox.style.height = myNum+myUnit;
});

minBut.addEventListener("click", function (){
    console.log("before", myNum);
    myNum = myNum - 50;
    console.log("after", myNum);
    myBox.style.width = myNum+myUnit;
    myBox.style.height = myNum+myUnit;
});


    
    
    
colorBut.addEventListener("click", function (){
    //myBox.style.backgroundColor = "rgb(25,55,150)";
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    myBox.style.backgroundColor = "rgb("+r+","+g+","+b+")"
    
});


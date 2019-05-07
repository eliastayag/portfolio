
//state vars
var pkg = {
    hair_dim:60,
    eyes_dim:40,
    nose_dim:20,
    mouth_dim:20,
    bgcolor:"#FFFFFF",

    hair_num: 2,
    eyes_num: 2,
    nose_num: 2,
    mouth_num: 2
    }

    //proxy settings
var handler = {
    set:function(obj, props, value){
        if (props == "bgcolor"){
            ChangeBGUI(value);

        }

        if (props == "hair_dim"){
            ChangeHairUI(value);
        }
        if (props == "eyes_dim"){
            ChangeEyesUI(value);
        }
        if (props == "nose_dim"){
            ChangeNoseUI(value);
        }
        if (props == "mouth_dim"){
            ChangeMouthUI(value);
        }

        
        

    }
}

var prox = new Proxy(pkg,handler);


//funcs that updates ui

function ChangeBG(el){
   
    prox.bgcolor = el.value;
}
function ChangeBGUI(val){
    document.querySelector("#preview").style.backgroundColor  = val;
    console.log("change ui col", val);
}





function ChangeHair(el){
    prox.hair_dim = el.value;
}

function ChangeHairUI(val){
    console.log("change hair", val);
    document.querySelector("#hair").style.width = val + "%";
}



function ChangeEyes(el){
    prox.eyes_dim = el.value;
}
function ChangeEyesUI(val){
    document.querySelector("#eyes").style.width = val + "%";
}



function ChangeNose(el){
    prox.nose_dim = el.value;
}
function ChangeNoseUI(val){
    document.querySelector("#nose").style.width = val + "%";
}




function ChangeMouth(el){
    prox.mouth_dim = el.value;
}
function ChangeMouthUI(val){
    document.querySelector("#mouth").style.width = val + "%";
}


 //change face type nums

 function SwitchHair(){  
     pkg.hair_num += 1;
     if(pkg.hair_num > 3){    
         pkg.hair_num = 1;  }  
         proxpkg.hair_num = pkg.hair_num;
     }

function SwitchHairUI(val){
    document.querySelector("#hair").src = "img/hair" + pkg.hair_num + ".png";
    SwitchHair();

}


function SwitchMouth(){  
    pkg.mouth_num += 1;
    if(pkg.mouth_num > 3){    
        pkg.mouth_num = 1;  }  
        proxpkg.mouth_num = pkg.mouth_num;
    }

function SwitchMouthUI(val){
   document.querySelector("#mouth").src = "img/mouth" + pkg.mouth_num + ".png";
   SwitchMouth();

}





function SwitchEyes(){  
    pkg.eyes_num += 1;
    if(pkg.eyes_num > 3){    
        pkg.eyes_num = 1;  }  
        proxpkg.eyes_num = pkg.eyes_num;
    }

function SwitchEyesUI(val){
   document.querySelector("#eyes").src = "img/eyes" + pkg.eyes_num + ".png";
   SwitchEyes();

}





function SwitchNose(){  
    pkg.nose_num += 1;
    if(pkg.nose_num > 3){    
        pkg.nose_num = 1;  }  
        proxpkg.nose_num = pkg.nose_num;
    }

function SwitchNoseUI(val){
   document.querySelector("#nose").src = "img/nose" + pkg.nose_num + ".png";
   SwitchNose();

}


//random avatar func

function RandomAva(){
    var randomhair = Math.floor((Math.random() * 3) + 1);
    var randomeyes = Math.floor((Math.random() * 3) + 1);
    var randomnose = Math.floor((Math.random() * 3) + 1);
    var randommouth = Math.floor((Math.random() * 3) + 1);

    var red = Math.floor((Math.random() * 255) + 1);
    var green = Math.floor((Math.random() * 255) + 1);
    var blue = Math.floor((Math.random() * 255) + 1);




    document.getElementById("hair").src = ("img/hair" + randomhair + ".png");
    document.getElementById("eyes").src = ("img/eyes" + randomeyes + ".png");
    document.getElementById("nose").src = ("img/nose" + randomnose + ".png");
    document.getElementById("mouth").src = ("img/mouth" + randommouth + ".png");
    document.getElementById("preview").style.backgroundColor = ("rgb( "+ red + "," + green + "," + blue + ")")

}

function CreateAva() {

        var ava= document.getElementById("preview");
        var ava2 = ava.cloneNode(true);
        document.getElementById("display").appendChild(ava2);

}


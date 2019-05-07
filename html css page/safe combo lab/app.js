var pkg = {
    status:"",
    bgcolor:"",
    combo: "1234",
    code:"",
    tries:0,
    maxTries:5
}

var handler = {
    set:function(obj, props, value){
        if (props == "status"){
            //update status ui
            ChangeStatusUI(value);
        }
        if (props == "bgcolor"){
            ChangeBGColor(value);

        }
    }
}

var prox = new Proxy(pkg,handler);

//state interactions
function HandleButton(el){
    console.log('clicked', el, el.innerText);
            
    if (pkg.tries > pkg.maxTries){
        prox.status = "Safe is disabled";
        prox.bgcolor = "grey";
        return false;
    }

    if (el.id == "1"){
        prox.status = "you've clicked b1";
        pkg.code += "1";
    }

    if (el.id == "2"){
        prox.status = "you've clicked b2";
        pkg.code += "2";

    }

    if (el.id == "3"){
        prox.status = "you've clicked b3";
        pkg.code += "3";

    }

    if (el.id == "4"){
        prox.status = "you've clicked b4";
        pkg.code += "4";

    }


    if (pkg.combo.length == pkg.code.length){
        if(pkg.combo == pkg.code){
            prox.bgcolor = "teal";
            prox.status = "you've unlocked the safe";
        } else {
            prox.status = "failed, try again";
            pkg.code = "";
            pkg.tries++;
            prox.bgcolor ="red";

        }
    }
    console.log(pkg);
}

//ui
function ChangeStatusUI(val) {
    console.log("statusUI", val);
    document.querySelector("#status").innerHTML = val;
}

function ChangeBGColor(){
    console.log("bg", val);
    document.body.style.backgroundColor = val;

}
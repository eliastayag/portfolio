//=== STATE VARS
var pkg = {
    name: "Name 1",
    bgcolor: "#DDD",
    dim:150,
    txtcolor:"#333"
}

//=== PROXY
var handler = {
    set:function(obj,props,value){
        //when pkg is changed, call this func
        if(props == "name"){
            ChangeNameTagUI(value,"name");
        }
        if(props == "bgcolor"){
            ChangeNameTagUI(value,"bg");
        }
        if(props == "dim"){
            ChangeNameTagUI(value,"dim");
        }
        if(props == "txtcolor"){
            ChangeNameTagUI(value,"txt");
        }

    }
}

var proxPkg = new Proxy(pkg,handler);

//=== CHANGE STATE FUNCS

function ChangeNamePkg(){
    console.log('chamge na,e');
    var nameInpVal = document.querySelector("#nameInp").value;
    proxPkg.name = nameInpVal;
}

function ChangeBgPkg(){
    var colorVal = document.querySelector("#colorInp").value;
    proxPkg.bgcolor = colorVal;

}

function ChangeTxtPkg(){
    var colorTxtVal = document.querySelector("#colorTxtInp").value;
    proxPkt.txtcolor = colorTxtVal;

}

function ChangeDimPkg(){

    var rangeVal = document.querySelector("#rangeIno").value;
    proxPkg.dim = rangeVal;

}

//=== CHANGE UI FUNCS

function ChangeNameTagUI(mvalue, mtype){
    var namediv = document.querySelector("#previewBox");
    var namespan = document.querySelector("previewName");
    if (mtype == "bg"){
        //change background color

        namediv.style.backgroundColor = mvalue;
    }

    if (mtype == "name"){
        namespan.innerText = mvalue;
    }

    if (mtype == "dim"){
        namediv.style.width =mvalue+"px";
        namediv.style.height =mvalue+"px";
    }

    if (mtype == "txt"){
        name.style.color = "mtype";
    }

}
ChangeNameTagUI("black", "bg", "red");
ChangeNameTagUI("My Real Name", "name");

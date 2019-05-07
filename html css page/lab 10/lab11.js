//state vars
var pkg = {
    title:"Default Title",
    url:"https://cdn1-www.dogtime.com/assets/uploads/gallery/shiba-inu-dog-breed-picutres/5-puppy-pg_.jpg"
};

//proxy settings
var handler = {
    set:function(obj,props,value){
        //what to handler to change the ui
        if (props == "title"){
            //change the title ui
            ChangeTitleUi(value);
        }

        if (props == "url"){
            //change the image url
            ChangeImageUi(value);
        }

    }
}
var prox = new Proxy(pkg, handler);

// functions that updates state
function ChangeImage(el){
    pkg.url = el.value; //for the data base (backend)
    //connecting backend with frontend
    prox.url = el.url; //for the ui (frontend)

}

function ChangeTitle(el){
    pkg.title = el.value; //for the database (backend)
    //connecting backend with frontend
    prox.title = pkg.title;//for the ui (frontend)
}


//functions that updates ui
function ChangeImageUi(val){
    console.log("change ui image", val);
    //change the src of previewImg
    document.getElementById("previewImg").src = val;
}

function ChangeTitleUi(val){
    console.log("change ui title", val);
    //change the innterText/HTML of previewTitle
    document.getElementById("previewTitle").innerText = val;

}

//start defautlt
ChangeImageUi(pkg.url);
ChangeTitleUi(pkg.title);
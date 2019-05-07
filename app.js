function ShowStuff() {
    document.getElementById("htmlcss").style.display = "block";
    document.getElementById("videoediting").style.display = "block";
    document.getElementById("graphicdesign").style.display = "block";

    var ht= document.getElementById("htmlcss"),
        ve = document.getElementById("videoediting"),
        gd = document.getElementById("graphicdesign");

        ht.style.left = 180 + "px";
        ve.style.left = 670 + "px";
        gd.style.left = 1100 + "px";


}
document.getElementById("img").src = "of.png";
document.getElementById("span").innerHTML ="off";
document.getElementById("of").style.backgroundColor = "blue";

function btnOn(){
    document.getElementById("img").src = "on.png"
    document.getElementById("span").innerHTML ="on";
    document.getElementById("on").style.backgroundColor = "rgb(245, 188, 0)";
    document.getElementById("of").style.backgroundColor = "white";
}


function btnOf(){
    document.getElementById("img").src = "of.png";
    document.getElementById("span").innerHTML ="off";
    document.getElementById("of").style.backgroundColor = "blue";
    document.getElementById("on").style.backgroundColor = "white";
}
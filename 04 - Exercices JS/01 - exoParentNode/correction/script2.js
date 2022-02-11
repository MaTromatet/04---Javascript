window.onload = function(){
    var boutons = document.querySelectorAll("table > tbody > tr > td:last-of-type button");
    console.log(boutons);
    boutons[0].addEventListener("click", function(){
        //this.parentNode.style.backgroundColor = "red";
        bgColor(this.parentNode);
    });
    boutons[1].addEventListener("click", function(){
        //this.parentNode.parentNode.style.backgroundColor = "red";
        bgColor(this.parentNode.parentNode);
        //bgColor(); // test sans argument
    });

}

function bgColor(){
    if(arguments[0] !== undefined){
        var element = arguments[0];
        element.style.backgroundColor = "red";
    }
    else{
        console.log("Erreur");
    }
}
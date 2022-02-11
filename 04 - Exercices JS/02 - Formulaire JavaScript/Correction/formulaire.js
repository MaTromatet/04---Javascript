window.onload = init;
var div1;
var div2;
var div3;
var div4;
var nom, prenom, tel, email;

function init(){
    div1 = document.querySelector("body > form > div:nth-of-type(1)")
    div2 = document.querySelector("body > form > div:nth-of-type(2)")
    div3 = document.querySelector("body > form > div:nth-of-type(3)")
    div4 = document.querySelector("body > form > div:nth-of-type(4)")
    nom = document.getElementsByName("nom")[0];
    prenom = document.getElementsByName("prenom")[0];
    tel = document.getElementsByName("tel")[0];
    email = document.getElementsByName("email")[0];
    valider();
}

function valider(){
    var validButton = document.querySelector("body > form > div:nth-child(5) > button:nth-child(2)");
    console.log("clickValidButton");
    validButton.addEventListener("click", function(){
        if(verify2()){
            document.querySelector("aside").innerHTML=nom.value+" "+prenom.value+"<br>"+tel.value+"<br>"+email.value ;
        }
        else{
            document.querySelector("aside").innerHTML="erreur de saisie";
        }
    });
}
function verify2(){
    var bool=true;
    bool = changeBg(nom,isAlpha(nom.value))?bool:false;
    bool = changeBg(prenom,isAlpha(prenom.value))?bool:false;
    bool = changeBg(tel,isNumerique(tel.value))?bool:false;
    bool = changeBg(email,isEmail(email.value))?bool:false;
    return bool;

}
function changeBg(element,isOK){
    element.parentNode.style.backgroundColor=(isOK?"initial":"red");
    return isOK;
}
function verify(){
    var nom = document.getElementsByName("nom")[0].value;
    var prenom = document.getElementsByName("prenom")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var email = document.getElementsByName("email")[0].value;
    console.log(nom, prenom, tel, email);
    if (isAlpha(nom) == false) {
        div1.style.backgroundColor = "red";
        console.log("error");
    } else {
        div1.style.backgroundColor = "initial";
    }

     if (isAlpha(prenom) == false) {
        div2.style.backgroundColor = "red";
        console.log("error");
    }else {
        div2.style.backgroundColor = "initial";
    }

     if (isNumerique(tel) == false) {
        div3.style.backgroundColor = "red";
        console.log("error");
    }else {
        div3.style.backgroundColor = "initial";
    }

     if (isEmail(email) == false) {
        div4.style.backgroundColor = "red";
        console.log("error");
    }else {
        div4.style.backgroundColor = "initial";
    }


}


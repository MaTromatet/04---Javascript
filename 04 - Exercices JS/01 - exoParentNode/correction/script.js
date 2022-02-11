var button1, button2;
/* window.onload = function(){
    button1 = document
    .querySelector("table tr:first-of-type > td:last-of-type > button");
   button1.addEventListener("click", cellRouge);
   
} */

window.onload = init;

function cellRouge(){

    button1.parentNode.style.backgroundColor = "red"; 

}
function init(){
    button1 = document
    .querySelector("table tr:first-of-type > td:last-of-type > button");
   button1.addEventListener("click", cellRouge);
   button2 = document.querySelector("table:first-of-type > tbody > tr:last-of-type > td:last-of-type >button");
   button2.addEventListener("click", lineRouge);
}

function lineRouge() {
    button2.parentNode.parentNode.style.backgroundColor = "red";
}

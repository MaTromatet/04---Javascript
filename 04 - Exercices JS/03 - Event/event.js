window.onload = init;

var bouton1;
var bouton2;
var div2;

function init() {
  bouton1 = document.querySelector(
    "body > div:nth-child(1) > button:nth-child(1)"
  );
  bouton1.addEventListener("click", clickbuton1);
  div2 = document.querySelector("body > div:nth-child(2)");
}
function clickbuton1() {
  if (!bouton2) {
    bouton2 = document.createElement("button");
    bouton2.innerHTML = "Bouton 2 (v1)";
    bouton2.addEventListener("click", function () {
      div2.innerHTML = "mon bouton 2";
    });
    bouton1.parentNode.appendChild(bouton2);
  }
  div2.innerHTML = "mon bouton fonctionne";
}

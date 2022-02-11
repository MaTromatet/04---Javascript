function checkValueAndSetColor(el, testFunction) {
  var isOk = testFunction(el.value);
  el.parentNode.style.backgroundColor = isOk ? "initial" : "red";
  return isOk;
}

function validateForm() {
  var nomEl = document.getElementById("nom");
  var prenomEl = document.getElementById("prenom");
  var telephoneEl = document.getElementById("telephone");
  var mailEl = document.getElementById("mail");

  var nomOk = checkValueAndSetColor(nomEl, isAlpha);
  var prenomOk = checkValueAndSetColor(prenomEl, isAlpha);
  var telephoneOk = checkValueAndSetColor(telephoneEl, isNumerique);
  var mailOk = checkValueAndSetColor(mailEl, isEmail);
  var allGood = nomOk && prenomOk && telephoneOk && mailOk;

  if (allGood) {
    var resultat =
      nomEl.value +
      " " +
      prenomEl.value +
      "<br>" +
      telephoneEl.value +
      "<br>" +
      mailEl.value;
    document.querySelector("aside > p").innerHTML = resultat;
  }
}

function reinitColors() {
  document
    .querySelectorAll("form > div")
    .forEach((el) => (el.style.backgroundColor = "initial"));
}

var sendButton = document.querySelector("form > div:last-of-type > button");
sendButton.addEventListener("click", function () {
  document.querySelector("aside > p").innerHTML = ""; // vide aside on click
  validateForm();
});

var resetButton = document.querySelector("form input[type=reset]");
resetButton.addEventListener("click", function () {
  document.querySelector("aside > p").innerHTML = ""; // vide aside on click
  reinitColors();
});

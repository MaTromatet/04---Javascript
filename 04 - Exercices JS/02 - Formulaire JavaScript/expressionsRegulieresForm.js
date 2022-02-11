function isAlpha(val) {
  var ok = false;
  if (val != "") {
    var regex = /^[a-zA-Z\-]*$/;
    ok = regex.test(val);
  }
  return ok;
}

function isNumerique(val) {
  var ok = false;
  if (val != "") {
    var regex = /^[0-9\.]*$/;
    ok = regex.test(val);
  }
  return ok;
}

function isEmail(val) {
  var ok = false;
  if (val != "") {
    var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
    ok = regex.test(val);
  }
  return ok;
}

window.onload = function () {
  var boutonValider = document.querySelector(
    "form > div:last-of-type > button:nth-of-type(2)"
  );

  boutonValider.addEventListener("click", function () {
    var listInput = document.querySelectorAll(" form > div > input");
    console.log("Test des input " + testInputList(listInput));
  });
};

function testInputList(element) {
  var test = true;
  console.log("Nom " + element[0].value);
  console.log("Prénom " + element[1].value);
  console.log("Tel " + element[2].value);
  console.log("mail " + element[3].value);
  if (isAlpha(element[0].value) == false) {
    bgColor(element[0].parentNode);
    test = false;
  } else {
    element[0].parentNode.style.backgroundColor = "initial";
  }
  if (isAlpha(element[1].value) == false) {
    bgColor(element[1].parentNode);
    test = false;
  } else {
    element[1].parentNode.style.backgroundColor = "initial";
  }

  if (isNumerique(element[2].value) == false) {
    bgColor(element[2].parentNode);
    test = false;
  } else {
    element[2].parentNode.style.backgroundColor = "initial";
  }
  if (isEmail(element[3].value) == false) {
    bgColor(element[3].parentNode);
    test = false;
  } else {
    element[3].parentNode.style.backgroundColor = "initial";
  }
  return test;
}

function bgColor() {
  if (arguments[0] !== undefined) {
    var element = arguments[0];
    element.style.backgroundColor = "red";
  } else {
    console.log("Erreur");
  }
}

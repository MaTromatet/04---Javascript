/* window.onload = function () {
  Telecommande.colorPolice = document.querySelector(
    '#telecommande input[name="couleur"]:checked'
  ).value;
}; */

var Telecommande = {
  //Propriété
  // colorPolice : document.querySelector('#telecommande input[name="couleur"]:checked'),
  colorPolice: "black",

  //Setters
  setColor: function (color) {
    this.colorPolice = color;
  },

  //Getters
  getColor: function () {
    return this.colorPolice;
  },

  //Méthodes
  getAllCases: function () {
    return Array.from(document.querySelectorAll("#tableau tr td"));
  },

  getAllFilledCases: function (table) {
    return table.filter((el) => el.innerHTML !== "");
  },

  getAllEmptyCases: function (table) {
    return table.filter((el) => el.innerHTML === "");
  },

  getRandomElement: function (table) {
    return table[Math.floor(Math.random() * table.length)];
  },

  fillCase: function (cell) {
    cell.style.color = this.getColor();
    cell.innerHTML = cell.id;
    this.SetNbColor(this.getColor(), 1);
  },

  fillAllCases: function (table) {
    table.forEach((element) => {
      this.fillCase(element);
    });
  },

  SetNbColor: function (color, number) {
    var cptColor;
    if (
      document.querySelector("#nb_" + color).innerHTML == "" ||
      document.querySelector("#nb_" + color).innerHTML == null
    ) {
      cptColor = 0;
    } else {
      cptColor = document.querySelector("#nb_" + color).innerHTML;
    }

    if (cptColor + number == 0) {
      document.querySelector("#nb_" + color).innerHTML = "";
    } else {
      document.querySelector("#nb_" + color).innerHTML =
        parseInt(number) + parseInt(cptColor);
    }
  },

  addId: function () {
    document.querySelector("#nb_black").innerHTML = "";
    document.querySelector("#nb_red").innerHTML = "";
    document.querySelector("#nb_blue").innerHTML = "";
    document.querySelector("#nb_green").innerHTML = "";

    //  console.log("La couleur défault est " + this.colorPolice);
    this.fillAllCases(this.getAllCases());
  },

  delAleatoire: function () {
    var filledCasesTable = this.getAllFilledCases(this.getAllCases());
    var nbCasesToErase = Math.floor(filledCasesTable.length / 2);
    var Cell;

    for (i = 0; i < nbCasesToErase; i++) {
      Cell = this.getRandomElement(filledCasesTable);
      Cell.textContent = "";
      this.SetNbColor(Cell.style.color, -1);

      filledCasesTable = this.getAllFilledCases(filledCasesTable);
    }
  },

  firstCase: function () {
    table = this.getAllEmptyCases(this.getAllCases());
    /*     table.sort(function (a, b) {
      return a.id > b.id;
    });
    if (table[0] != undefined) {
      this.fillCase(table[0]);
    } */
    if (table.length > 0) {
      table.sort(function (a, b) {
        return a.id > b.id;
      });
    }
    console.log(table);
  },

  addIdDansVide: function () {
    this.fillAllCases(this.getAllEmptyCases(this.getAllCases()));
  },
};

window.onload = function () {
  Telecommande.colorPolice = document.querySelector(
    '#telecommande input[name="couleur"]:checked'
  ).value;
};

var Telecommande = {
  //Propriété
  // colorPolice : document.querySelector('#telecommande input[name="couleur"]:checked'),
  colorPolice: "",

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

  getAllFullCases: function (table) {
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

  SetNbColor: function (color, number) {
    var cptColor;
    if (document.querySelector("#nb_" + color).innerHTML == "") {
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

  fillAllCases: function (table) {
    table.forEach((element) => {
      this.fillCase(element);
    });
  },

  addId: function () {
    document.querySelector("#nb_black").innerHTML = "";
    document.querySelector("#nb_red").innerHTML = "";
    document.querySelector("#nb_blue").innerHTML = "";
    document.querySelector("#nb_green").innerHTML = "";

    console.log("La couleur défault est " + this.colorPolice);
    this.fillAllCases(this.getAllCases());
  },

  delAleatoire: function () {
    var FullCasesTable = this.getAllFullCases(this.getAllCases());
    var NbCasesToErase = Math.floor(FullCasesTable.length / 2);
    var Cell;

    for (i = 0; i < NbCasesToErase; i++) {
      Cell = this.getRandomElement(FullCasesTable);
      Cell.textContent = "";
      this.SetNbColor(Cell.style.color, -1);

      FullCasesTable = this.getAllFullCases(FullCasesTable);
    }
  },

  firstCase: function () {
    table = this.getAllEmptyCases(this.getAllCases());

    if (table[0] != undefined) {
      this.fillCase(table[table.length - 1]);
    }
  },

  addIdDansVide: function () {
    this.fillAllCases(this.getAllEmptyCases(this.getAllCases()));
  },
};

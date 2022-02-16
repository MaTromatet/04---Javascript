var Telecommande = {
  //Propriété

  colorPolice: "",

  //Setters

  setColor: function (couleur) {
    this.colorPolice = couleur;
  },

  //Getters

  getCells: function () {
    return Array.from(document.querySelectorAll("#tableau tr td"));
  },

  //Méthodes

  addId: function () {
    //  tableau.getTable();
    this.getCells().forEach((element) => {
      element.style.color = this.colorPolice;
      element.innerHTML = element.id;
    });
  },

  delAleatoire: function () {
    var FullCellTable = this.getCells().filter((el) => el.innerHTML !== "");
    console.log("Taille tableau celulles pleines : " + FullCellTable.length);
    for (i = 0; i < FullCellTable.length / 2; i++) {
      var randomNumber = Math.floor(Math.random() * FullCellTable.length);
      console.log("ici", FullCellTable[randomNumber]);
      FullCellTable[randomNumber].textContent = "";
    }
  },

  isNotEmpty: function (element) {
    return element !== "";
  },

  firstCase: function () {},

  addIdDansVide: function () {},
};

var Telecommande = {
    color: "black",

    monCompteur: {
        "black": 0,
        "red": 0,
        "green": 0,
        "blue": 0
    },

    compteur: function () {
        var mesElements = document.querySelectorAll("table#tableau tr td:not(:empty)");
        //console.log(mesElements);
        this.monCompteur.black = 0;
        this.monCompteur.red = 0;
        this.monCompteur.green = 0;
        this.monCompteur.blue = 0;
        for (var i = 0; i < mesElements.length; i++) {
            //console.log(mesElements[i].style.color);
            this.monCompteur[mesElements[i].style.color]++;
        }
        //console.log(this.monCompteur);
        document.querySelector("table#telecommande tr td#nb_black").innerHTML = this.monCompteur.black;
        document.querySelector("table#telecommande tr td#nb_red").innerHTML = this.monCompteur.red;
        document.querySelector("table#telecommande tr td#nb_green").innerHTML = this.monCompteur.green;
        document.querySelector("table#telecommande tr td#nb_blue").innerHTML = this.monCompteur.blue;
    },

    getCells: function () {
        return Array.from(document.querySelectorAll("#tableau tr td"));
    },

    getFilledCells: function () {
        return this.getCells().filter(function (el) {
            return el.innerHTML ? true : false;
        }
        );
    },

    addId: function () {
        var cells = this.getCells();
        for (var i = 0; i < cells.length; i++) {
            cells[i].innerHTML = cells[i].id;
            cells[i].style.color = this.color;
        }
        //this.showAllCounters();
        this.compteur();
    },

    delAleatoire: function () {
        var moitie = Math.floor(this.getFilledCells().length / 2);
        //console.log(this.getFilledCells());
        for (var i = 1; i <= moitie; i++) {
            var rand = Math.floor(Math.random() * this.getFilledCells().length);
            //console.log(rand);
            var cellSup = this.getFilledCells()[rand];
            var cellSupId = "#" + cellSup.id;
            // this.getFilledCells().splice(this.getFilledCells().indexOf(cellSup), 1);
            document.querySelector(cellSupId).innerHTML = "";
            //console.log(cellSup.id, this.getFilledCells());
        }
        this.compteur();
    },

    getAllEmptyCases: function (table){
        return table.filter(function (el){
          return  el.innerHTML =="";
        })
    },

    firstCase: function () {
        table = this.getAllEmptyCases(this.getCells());
        var tableId=[];
        for(var i =0;i< table.length;i++){
            tableId[i]=table[i].id;
        };

        tableId.sort();
        var cell=document.getElementById(tableId[0]);
        cell.innerHTML=cell.id;
        cell.style.color=this.color;
        cell.style.fontWeight="bold";
        this.compteur();

        /* 
        if(table.length>0){
        var cell=table.sort(function(a,b){
            console.log(a.id,b.id);
            return (a.id > b.id);
        });
        console.log("après", cell);
        cell.innerHTML=cell.id;
        cell.style.color=this.color;
        cell.style.fontWeight="bold";
        this.compteur(); */
    //}
    },

    addIdDansVide: function () {
        var mesElements = document.querySelectorAll("table#tableau tr td:empty");
        for (var i  =0 ; i< mesElements.length; i++){
            mesElements[i].innerHTML=mesElements[i].id;
            mesElements[i].style.color= this.color;
        }
        this.compteur();

    },

    setColor: function (couleur) {
        this.color = couleur;
    },

    count: function (couleur) {
        console.log(this.getFilledCells());
        return (this.getFilledCells().filter(function (el) {
            return el.style.color === couleur;
        }).length);
    },

    showCounter: function (couleur) {
        var counterCellId = "nb_" + couleur;
        document.getElementById(counterCellId).innerHTML = this.count(couleur);
    },

    showAllCounters: function () {
        this.showCounter('black');
        this.showCounter('red');
        this.showCounter('blue');
        this.showCounter('green');
    }

}
var o = {
    'nom' : "Dupond",
    'prenom' : "Alain",
    'tels' : [
        "11111",
        "22222"
    ],
    'emails' : {
        'pro' : "aaaaa@aaa.aa",
        'perso' : "zzzz@zzzz.ee"
    },
    'afficher' : function(){
        return this.nom + " " + this.prenom + " " + this.emails.perso;
    }
}

console.log(o.nom, o.prenom, o.tels[1], o.emails.perso);

var dupond = Object.create(o);
var duran = Object.create(o);

dupond.prenom = "Michel";
console.log(dupond.nom, dupond.prenom);
console.log(o.nom, o.prenom, o.tels[1], o.emails.perso);

console.log(dupond.afficher());


// debut validation

contact.setError(false);


var nom = "aaaa";

console.log("nom : ",contact.nom);
contact.setNom(nom);
console.log("nom : ",contact.nom);


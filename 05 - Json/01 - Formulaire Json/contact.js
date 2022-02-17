var contact = {
    // Propriétés
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    error: false,

    // Setters
    set: function (test, element, champ) {
        if (test(element.value)) {
            this[champ] = element.value;
            this.errorGestion(element, false);
        }
        else {
            this.error = true;
            this[champ] = "";
            this.errorGestion(element, true);
        }
    },

    // setNom: function (element) {
    //     if (this.isAlpha(element.value)) {
    //       this.nom = element.value;
    //       errorGestion(element, false);
    //     } else {
    //       this.error = true;
    //       errorGestion(element, true);
    //     }
    //   },
    setNom: function (element) {
        this.set(controle.isAlpha, element, 'nom');
    },

    setPrenom: function (element) {
        this.set(controle.isAlpha, element, 'prenom');
    },

    setTel: function (element) {
        this.set(controle.isNumerique, element, 'tel');
    },

    setEmail: function (element) {
        this.set(controle.isEmail, element, 'email');
    },

    setError: function (bool) {
        this.error = bool;
    },

    // Getters
    getNom: function () {
        return this.nom;
    },
    getPrenom: function () {
        return this.prenom;
    },
    getTel: function () {
        return this.tel;
    },
    getEmail: function () {
        return this.email;
    },
    isError: function () {
        return this.error;
    },


    // Méthodes
    errorGestion: function (element, bool) {
        element.parentNode.style.backgroundColor = (bool) ? "red" : "initial";
    },

    afficher: function () {
        return this.nom + " " + this.prenom + " " + "<br>" + this.tel + "<br>" + this.email;
    }
};

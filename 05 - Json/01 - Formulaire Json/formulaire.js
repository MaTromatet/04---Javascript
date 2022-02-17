window.onload = function (event) {
    var form = document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
        event.preventDefault();
        var nom = document.getElementById('nom');
        var prenom = document.getElementById('prenom');
        var tel = document.getElementById('tel');
        var email = document.getElementById('email');
        var aside = document.getElementsByTagName('aside')[0];
        contact.setError(false);
        contact.setNom(nom);
        contact.setPrenom(prenom);
        contact.setTel(tel);
        contact.setEmail(email);


        if (!contact.isError()) {
           aside.innerHTML = contact.afficher();
            // this.submit();
        } else {
            aside.innerHTML = "erreur de saisie";
        }

    });
}

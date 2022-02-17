window.onload = function () {
    contact.setError(false);
    contact.setNom("Moneger5");
    console.log("Attendu:", true, "Obtenu:", contact.getError());
    contact.setError(false);
    contact.setNom("Moneger");
    console.log("Attendu:", false, "Obtenu:", contact.getError());
}

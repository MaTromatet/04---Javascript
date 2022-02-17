
var controle = {
    // Expressions régulières
    isAlpha: function (val) {
        var ok = false;
        if (val != "") {
            var regex = /^[a-zA-Z\-]*$/;
            ok = regex.test(val);
        }
        return ok;
    },

    isNumerique: function (val) {
        var ok = false;
        if (val != "") {
            var regex = /^[0-9\.]*$/;
            ok = regex.test(val);
        }
        return ok;
    },

    isEmail: function (val) {
        var ok = false;
        if (val != "") {
            var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
            ok = regex.test(val);
        }
        return ok;
    }
}
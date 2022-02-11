function isAlpha(val){
	var ok = false;
	if(val!=''){
		var regex = /^[a-zA-Z\-]*$/;
		ok = regex.test(val);
		
	}
    return ok;
}

function isNumerique(val){
	var ok = false;
	if(val!=''){
		var regex = /^[0-9\.]*$/;
		ok = regex.test(val);
	}
	return ok;
}

function isEmail(val){
	var ok = false;
	if(val!=''){
		var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
		ok = regex.test(val);
	}
    return ok;
}
function city(e, nameOfCity) {
    var i;
    var cityName = document.querySelectorAll('.city-name');
    for (i = 0; i < cityName.length; i++) {
        cityName[i].className = 'none';
    }
    var tab = document.querySelectorAll('.tab');
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
}

document.querySelectorAll('.city-name').className = "block";
e.currentTarget.className += " active";





















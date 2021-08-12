var tab = document.querySelector('.tab');
for (var j = 0; j < tab.length; j++) {
    tab.addEventListener('click', city())
}

function city(e, nameOfCity) {
    var i;
    var cityName = document.querySelector('.city-name');
    for (i = 0; i < cityName.length; i++) {
        cityName[i].className = "none";
    }
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
    document.querySelector(nameOfCity).className = "block";
    e.currentTarget.className += " active"; 
}


















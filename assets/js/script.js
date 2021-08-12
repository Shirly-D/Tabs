var tab = document.querySelectorAll('.tab');
for (var j = 0; j < tab.length; j++) {
        tab[j].addEventListener('click', function(e){
            if (this == e.target) {
           var cityName = e.target.getAttribute("data-city");
           city(e, cityName);
           console.log(cityName);
        }
    });

}

function city(e, nameOfCity) {
    var i;
    var cityName = document.querySelectorAll('.city-name');
    for (i = 0; i < cityName.length; i++) {
        cityName[i].className = "none";
    }
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
    document.querySelectorAll('#' + nameOfCity).className = "block";
    e.currentTarget.className += " active"; 
}


















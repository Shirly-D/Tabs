var tab = document.querySelectorAll('.tab');
for (var j = 0; j < tab.length; j++) {
        tab[j].addEventListener('click', function(e){
            if (this == e.target) {
           var cityName = e.target.getAttribute("data-city");
           city(e, cityName);
        }
    });
}

function city(e, nameOfCity) {
    var i;
    var cityName = document.querySelectorAll('.city-name');
    for (i = 0; i < cityName.length; i++) {
        var currCity = cityName[i].getAttribute('id');
        cityName[i].classList.remove('active-content');
        tab[i].className =tab[i].className.replace(" active", "");
    }
    document.querySelector('#' + nameOfCity).classList.add('active-content');
    e.target.className += " active";
    console.log(document.querySelector('#' + nameOfCity)); 
}


















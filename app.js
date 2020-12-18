const apikey = `ec63f7d283893939d0a08fbab85f372f`;


//appel API météo
let apicall = function(city){
    let url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        //document.querySelector('#city2').innerHTML = date.name;
        document.querySelector('#ciel').innerHTML = data.weather[0].description;
        document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + '°';
        document.querySelector('#temp2').innerHTML = Math.round(data.main.temp) + '°';
        document.querySelector('#mintempnum').innerHTML = Math.round(data.main.temp_min) + '°' + '/' ;
        document.querySelector('#maxtempnum').innerHTML = Math.round(data.main.temp_max) + '°';
        document.querySelector('#maxtempnum2').innerHTML = Math.round(data.main.temp_max) + '°';
        document.querySelector('.ventnum').innerHTML = data.wind.speed + ' km/h';
        document.querySelector('.humiditenum').innerHTML = data.main.humidity + ' %';
        document.querySelector('.pressionnum').innerHTML = data.main.pressure + ' Mb';
        document.querySelector('.visibilitenum').innerHTML = data.visibility / 1000 + ' Km/h';

        
    })
);

}
        
const button = document.getElementById('btn');

button.addEventListener('click', inputcity)

function inputcity(e){
    e.preventDefault();
    let ville = document.querySelector('#inputcity').value;
    apicall(ville); 

}



document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputcity').value;
    apicall(ville);
});

apicall('nantes');

/////////////////////////////////////////////////////////////////////////////////////////////////////////


var heuress = document.querySelector('#clock');
var date = document.querySelector('#date');

var affichageHeure = function(){
    // Déclaration des variables 
    var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;

    // Récupére la date actuelle : 
    today = new Date();

    // Récupére l'année : 
    annee = today.getFullYear();

    //Récupére le mois : 
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeMois[today.getMonth()]; 

    // Récupére le numéro du jour du mois : 
    jourNUmero = today.getDate();

    // Récupére le jour : 
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; 


    //Affiche les heures, minutes et secondes toujours avec deux chiffres : 
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }

    
    heures = deuxChiffres(today.getHours());
    minutes = deuxChiffres(today.getMinutes());
    secondes = deuxChiffres(today.getSeconds());

    //Affichage
    heuress.textContent = heures + ":" + minutes + ":" + secondes;
    date.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // Lancer la fonction affichage  
    setTimeout(affichageHeure, 1000);
}

//Lance la fonction
affichageHeure();
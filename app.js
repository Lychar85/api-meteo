const apikey = `ec63f7d283893939d0a08fbab85f372f`;

let url =`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#ciel').innerHTML = data.weather[0].description;
        document.querySelector('#temp').innerHTML = data.main.temp + '°';
        document.querySelector('#temp2').innerHTML = data.main.temp + '°';
        document.querySelector('#mintempnum').innerHTML = data.main.temp_min + '°' + '/' ;
        document.querySelector('#maxtempnum').innerHTML = data.main.temp_max + '°';
        document.querySelector('#maxtempnum2').innerHTML = data.main.temp_max + '°';
        document.querySelector('.ventnum').innerHTML = data.wind.speed;
        document.querySelector('.humiditenum').innerHTML = data.clouds.all + '%';
        document.querySelector('.pressionnum').innerHTML = data.main.pressure;
        document.querySelector('.visibilitenum').innerHTML = data.visibility;
    
    })
);


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputcity').value;
});



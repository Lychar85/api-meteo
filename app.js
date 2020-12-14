const apikey = `ec63f7d283893939d0a08fbab85f372f`;

let url =`http://api.openweathermap.org/data/2.5/weather?q=Nantes&appid=${apikey}&units=metric&lang=fr`;

fetch(url).then((response) =>
    response.json().then((data) => console.log(data))
);



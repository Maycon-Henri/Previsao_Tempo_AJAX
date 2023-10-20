

const req = new XMLHttpRequest();

function buscarLocal(latitude, longitude) {
    const key = "38b12d6efe9d1239538d7c5c03d7024c";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric&lang=pt_br`;

    req.open("GET", url, true);

    req.onload = () => {
        const weatherInfo = document.querySelector(".weather-info");
        

        if (req.status === 200) {
            const response = JSON.parse(req.response);
            console.log(response);

            document.querySelector(".cidade").innerHTML = ` ${response.name}`;
            document.querySelector(".descricao").innerHTML = response.weather[0].description;
            document.querySelector(".temp").innerHTML = `${response.main.temp}°C`;
            document.querySelector(".umidade").innerHTML = `Humidade: ${response.main.humidity}%`;
            document.querySelector(".vento").innerHTML = `Vento: ${response.wind.speed} Km/h`;
            document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png"
            
           
                
                        
            
            
        } else {
            weatherInfo.innerHTML = "Essa cidade não existe!"
            console.error(`Erro na requisição ${req.status}`);
        }   
    };

    req.onerror = () => {
        console.error("ERROR");
    }

    req.send();
}

navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    buscarLocal(latitude, longitude)

    
});
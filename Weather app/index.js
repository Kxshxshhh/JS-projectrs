const apiKey = "25e2c8257056fb1518f5814c47193102";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

     var data = await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed +" km/hr";

    if(data.weather[0].main =="Clouds"){
        const weatherIcon=document.querySelector(".weather-icon");
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } 
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    } 
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png";
    }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

searchBox.addEventListener("keypress",(event)=>{
    checkWeather(searchBox.value);
})
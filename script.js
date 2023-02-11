const cardBody = document.getElementById('card-body')
const cityName=document.querySelector('h4')
const input=document.getElementById('city-input')
const searchBtn=document.querySelector('button')




let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
 const URL1 = "https://api.openweathermap.org/data/2.5/weather";
 






const getWeatherData=async(city)=>{
    const html = (
      weatherState,
      mainTemp,
      minTemp,
      maxTemp
    ) => ` <h1 id="weather-type" class="card-title">${weatherState}</h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>Temp: <span id="temp">${mainTemp}</span>°</li>
                    <li>Min Temp: <span id="min-temp">${minTemp}</span>°</li>
                    <li>Max Temp: <span id="max-temp">${maxTemp}</span>°</li>
                  </ul>`;
    const dashes = "---";              
const FULL_URL = `${URL1}?q=${city}&appid=${API_KEY}&units=imperial`;

    const response=await fetch(FULL_URL)
 const data=await response.json()
 
if(!data.message){

const {name}=data
const mainTemps= data.main
const weatherState=data.weather[0].main





cardBody.innerHTML= html(weatherState,mainTemps.temp,mainTemps.temp_min,mainTemps.temp_max)
cityName.textContent=name
 } else{
     cardBody.innerHTML=html(dashes,dashes,dashes,dashes)
     cityName.textContent ='No city found!'

    
    }
}


searchBtn.addEventListener('click',()=> getWeatherData(input.value))


  

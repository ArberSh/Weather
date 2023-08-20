const apiKey = "a153fbc34f4ba33383ff514236191a7c"
const input = document.querySelector(".city")
const Searchbar = document.querySelector(".searchBar")
const Result = document.querySelector(".Result")
const ImgWeather = document.querySelector(".ImgWeather")
const Message = document.querySelector(".Message")
const CityName = document.querySelector(".CityName")
const windElement = document.querySelector(".M-Wind")
const Temp = document.querySelector(".Temperature")
const TempMax = document.querySelector(".HighTemp")
const TempMin = document.querySelector(".LowTemp")
const Humidity = document.querySelector(".M-Humidity")
async function Weather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
    const data = await response.json()
    const City = data.name
    if(!data.name){
        Result.style.display = "none"
        Message.style.display = "flex"
        input.value = ''
    }
    else{
    Result.style.display = "block"
    Message.style.display = "none"
    windSpeed = data.wind.speed
    const temp = data.main.temp
    const humidity = data.main.humidity
    const tempMax = data.main.temp_max
    const tempMin = data.main.temp_min
    CityName.textContent = City
    windElement.textContent = Math.floor(windSpeed) + "km/h";
    Temp.textContent = Math.floor(temp)+ "°C";
    TempMax.textContent = Math.floor(tempMax) + "°C";
    TempMin.textContent = Math.floor(tempMin) + "°C";
    Humidity.textContent = Math.floor(humidity);
    input.value = ''

    if(data.weather[0].main == "Clouds"){
        ImgWeather.src = "./photos/clouds.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        ImgWeather.src = "./photos/clear.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
        ImgWeather.src = "./photos/drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        ImgWeather.src = "./photos/mist.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        ImgWeather.src = "./photos/rain.png"
    }
    else if(data.weather[0].main == "Snow")
    {
        ImgWeather.src = "./photos/snow.png"
    }
}
}
input.addEventListener("keyup",function(event)
{
    if(event.keyCode === 13){
        Weather()
    }
})
const apiKey = "a153fbc34f4ba33383ff514236191a7c"
const input = document.querySelector(".city")
const CityName = document.querySelector(".CityName")
const windElement = document.querySelector(".M-Wind")
const Temp = document.querySelector(".Temperature")
const TempMax = document.querySelector(".HighTemp")
const TempMin = document.querySelector(".LowTemp")
const Humidity = document.querySelector(".M-Humidity")
async function Weather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
    const data = await response.json()
    windSpeed = data.wind.speed
    const temp = data.main.temp
    const humidity = data.main.humidity
    const tempMax = data.main.temp_max
    const tempMin = data.main.temp_min
    const City = data.name

    CityName.textContent = City
    windElement.textContent = Math.floor(windSpeed);
    Temp.textContent = Math.floor(temp);
    TempMax.textContent = Math.floor(tempMax);
    TempMin.textContent = Math.floor(tempMin);
    Humidity.textContent = Math.floor(humidity);

    console.log(Math.floor(temp))
    console.log(humidity)
    console.log(City)
    console.log(Math.floor(tempMax))
    console.log(Math.floor(tempMin))
}
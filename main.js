import API_KEY from './key.js'

const start = document.querySelector(".submit")
const inputValue = document.getElementById("input-value")
let name = document.querySelector(".city")
let desc = document.querySelector(".desc")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".icon")


start.addEventListener('click', event => {
    event.preventDefault();
    const text = inputValue.value.trim()
    text !== "" ? getData() : icon.innerHTML = `<img src =svgicon/unknown.svg>`
    name.innerHTML = ""
    desc.innerHTML = ""
    temp.innerHTML = ""
})

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=${API_KEY}`)
        .then(Response => Response.json())
        .then(data => {
            const nameValue = data['name']
            const country = data['sys']['country']
            const descValue = data['weather'][0]['description']
            const tempValue = data['main']['temp']
            const iconValue = data['weather'][0]['icon']

            icon.innerHTML = `<img src=svgicon/${iconValue}.svg>`
            temp.innerHTML = `${Math.floor(tempValue)}&degC`
            desc.innerHTML = descValue
            name.innerHTML = `${nameValue}, ${country} `
            
            
        })

        .catch(err => {
            icon.innerHTML = `<img src =svgicon/unknown.svg>`
            name.innerHTML = ""
            desc.innerHTML = ""
            temp.innerHTML = ""
        })
}
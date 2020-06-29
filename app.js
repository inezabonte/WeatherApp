const start = document.querySelector(".submit")
const inputValue = document.querySelector(".input-value")
let name = document.querySelector(".city")
let desc = document.querySelector(".desc")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".icon")


start.addEventListener('submit', event => {
    event.preventDefault();
    getData();
})

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=`)
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            const nameValue = data['name']
            const country = data['sys']['country']
            const descValue = data['weather'][0]['description']
            const tempValue = data['main']['temp']
            const iconValue = data['weather'][0]['icon']

            icon.innerHTML = `<img src=svgicon/${iconValue}.svg>`
            name.innerHTML = `${nameValue}, ${country} `
            desc.innerHTML = descValue
            temp.innerHTML = `${Math.floor(tempValue - 273)}&degC`
        })

        .catch(err => {
            icon.innerHTML = `<img src =svgicon/unknown.svg>`
            name.innerHTML = ""
            desc.innerHTML = ""
            temp.innerHTML = ""
        })
}
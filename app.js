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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=edb839dfef03a30aa8c5401b5dacc655`)
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
            temp.innerHTML = `${Math.floor(tempValue)}&degC`
        })

        .catch(err => {
            icon.innerHTML = `<img src =svgicon/unknown.svg>`
            name.innerHTML = ""
            desc.innerHTML = ""
            temp.innerHTML = ""
        })
}
// references to the elements that we will be interacting with
const regionBaseURL = "https://restcountries.com/v3.1/region/"

const regionDD = document.querySelector("#region")
const countryDD = document.querySelector("#country")

regionDD.addEventListener('change', handleRegionChange)

async function handleRegionChange() {
    const url = `${regionBaseURL}${regionDD.value}`
    const data = await fetch(url)
    const countries = await data.json()

    countryDD.innerHTML = countries.map(country => `<option value=${country.name.common}> ${country.name.common} </option> `).join(' ')
}
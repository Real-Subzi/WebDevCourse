const region = document.querySelector("#region") //Selected the datalist.
const baseRegionURL = "https://restcountries.com/v3.1/region/" //Form the base URL.
const country = document.querySelector("#country") //Selected the country drop down. 
const factsArea = document.querySelector("#facts-area")
const baseCountryURL = "https://restcountries.com/v3.1/name/" 


region.addEventListener("change",handleRegionChange) //Add a listener for regions.
async function handleRegionChange(){
    const selectedRegion = region.value //extract the region 
    const RegionURL = `${baseRegionURL}${selectedRegion}` //make the url
    const data = await fetch(RegionURL); //gets the data from this URL
    const countries = await data.json();
    
    country.innerHTML = countries.map((country)=>`<option value="${country.name.common}">${country.name.common}</option>`)
}

country.addEventListener("change",handleCountryChange)
async function handleCountryChange(){
    const CountryURL = `${baseCountryURL}${country.value}`
    console.log(CountryURL);
    const Data = await fetch(CountryURL)
    const CountryData = await Data.json() //parse into an object
    console.log("le country",CountryData)
    //const countryData = CountryData[0] //it returns an array, so take the first value of that array which is our desired country.
    console.log(country.value)
    const countryDataArray = CountryData.filter((item)=>item.name.common==country.value) //this only returns the array
    const countryData = countryDataArray[0] //we need this to get the object from it, not the array
    //if i wanted to display all of the countries, i would get rid of line 25, and everything after line 33 should be a function. in this function i will get the html of every
    //country. but beware lines, 31 32 will also be in the function. 
    // apply factsArea.innerHTML = functionName(CountryData) which will inject the html of every country into facts area.

    const keys = Object.keys(countryData.currencies) //gets first level attributes names. ALSO, only works on an object, not array.
    const currencies = keys.map((key) => countryData.currencies[key].name) //for each key, get the value of name
    //we can also use Object.values()

    factsArea.innerHTML = `<h2>Facts about ${countryData.name.official}</h2>
                            <img src="${countryData.flags.png}">
                            <table>
                                <tr>
                                    <td>Official Country Name</td>
                                    <td>${countryData.name.official}</td>
                                </tr>
                                <tr>
                                    <td>Capital City</td>
                                    <td>${countryData.capital}</td>
                                </tr>
                                <tr>
                                    <td>Currency</td>
                                    <td>${currencies}</td>
                                </tr>
                                <tr>
                                    <td>Population</td>
                                    <td>${countryData.population}</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>${Object.values(countryData.languages)}</td>
                                </tr>
                            </table>`
}
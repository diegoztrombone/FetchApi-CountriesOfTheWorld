const europe = document.getElementById("europe")
const asia = document.getElementById("asia")
const africa = document.getElementById("africa")
const americas = document.getElementById("america")
const oceania = document.getElementById("oceania")
const myButton = document.getElementById("mybtn")
const countriesNode = document.getElementById("countries");
const regionsArr = [europe, asia, africa, americas, oceania]


const fetched = fetch("https://restcountries.eu/rest/v2/all")
.then(function (response) {
    return response.json()
})
.then(function (countries) {
      countries.map(element => {
       return countriesNode.innerHTML += cardTemplate(element)  
})
return countries
})

regionsArr.forEach(element => {
  element.addEventListener("click", event => {
    countriesNode.innerHTML = ""
    fetched.then((countries) => {
      countries.filter((country) => {
        if (country.region === event.target.value) {
          return countriesNode.innerHTML += cardTemplate(country)  
        }
      })
    })  
  })
})

myButton.addEventListener("click", () => {
  document.querySelectorAll('[name=radio]').forEach((x) => x.checked=false);
  countriesNode.innerHTML = ""
  fetched.then(function (countries) {
    countries.map(element => {
     return countriesNode.innerHTML += cardTemplate(element)
})
})
})

const cardTemplate = function (data) {
  return `<div class="card">
              <img class="flag-image" src="${data.flag}" alt="flag" />
              <h1 class="center">${data.name}</h1>
            </div>`;
};



       



        
         
   
        
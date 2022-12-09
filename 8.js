var xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status<=300){
        let data = JSON.parse(this.response);
        console.log(data[114]);

// Get all the countries from Asia continent /region using Filter function

       let asiacountry = data.filter((data)=>data.region=="Asia").map((data)=>`Name:${data.name.common}`);
       console.log(asiacountry);
        document.getElementById("asiaCountry").innerText= asiacountry;


// Get all the countries with a population of less than 2 lakhs using Filter function

       let population = data.filter((data)=>data.population<200000).map((data)=>`Name:${data.name.common}`);
       console.log(population);
       document.getElementById("population").innerText= population;


// Print the following details name, capital, flag using forEach function

       let  details = [];
       data.forEach((data) =>{
       details.push(`Name:${data.name.common} Capital:${data.capital} Flag:${data.flags.png}`);
    })
       console.log(details);
       document.getElementById("details").innerText= details;

       
//  Print the total population of countries using reduce function  
       let  popu = [];
       data.forEach((data) =>{
       popu.push(data.population);
       })
       console.log(popu);
       let total = popu.reduce((total, current) =>{
        return total += current;
       },0)
       console.log(total);


//  Print the country which uses US Dollars as currency.

       let  curr = [];
       data.forEach((data) =>{
       curr.push(data.currencies);
       })
       console.log(curr);
       let country = curr.filter((curr) => curr.USD.symbol =="$"  ).map((data) => `Name:${data.name.common}`);
       console.log(country);


    }
}
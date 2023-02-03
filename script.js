// 2.   Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).


/*      b. Get all the countries with a population of less than 2 lakhs using Filter function

    var method = new XMLHttpRequest();
    method.open("GET","https://restcountries.com/v3.1/all","true");
    method.send();
    method.onload = function(){
        var data = method.response;
        var result = JSON.parse(data);
        var population = result.filter((ele) => ele.population<200000);
        //var countries = population.map((a) => a.population);
        console.log(population);
    }
----------------------------------------------------------------------------- */

/*   a. Get all the countries from the Asia continent /region using the Filter function

    var data = new XMLHttpRequest();
    data.open("GET","https://restcountries.com/v3.1/all");
    data.send();
    data.onload = function(){
        var Reader = data.response;
        var Result = JSON.parse(Reader);
        var Region = Result.filter((ele)=> ele.region === 'Asia');
        // var Country = Region.map((a) => a.name.common)

        console.log(Region);
    }
----------------------------------------------------------------------------- */

/*     c. Print the following details name, capital, flag using forEach function

    var Request = new XMLHttpRequest();
    Request.open("GET","https://restcountries.com/v3.1/all");
    Request.send();
    Request.onload = function(){
        var data = Request.response;
        var result = JSON.parse(data);
        result.forEach(
            (ele) => console.log(ele.name, ele.capital,ele.flag)
        )
        
    }
------------------------------------------------------------------------------ */

/*     d. Print the total population of countries using reduce function

    var Request = new XMLHttpRequest();
    Request.open("GET","https://restcountries.com/v3.1/all");
    Request.send();
    Request.onload = function(){
        var data = Request.response;
        var final = JSON.parse(data);

       final.reduce((a)=>{
            var sum1 =0;
            sum1 += a.population;
            console.log(sum1);
        })
    }
-------------------------------------------------------------------------------- */

//     e. Print the country which uses US Dollars as currency.

    // var country = new XMLHttpRequest();
    // country.open("GET","https://restcountries.com/v3.1/all");
    // country.send();
    // country.onload = function(){
    //     var data = country.response;
    //     var result = JSON.parse(data);
    //     console.log(result);
    //     for(var i=0;i<result.length;i++){
    //          if(result[i].currencies==="USD"){
    //              console.log(result[i].currencies);
    //         }
    //     }
    // }













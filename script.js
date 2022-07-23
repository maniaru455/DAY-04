var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);


console.log(result);
   
   var name=result.filter((ele)=>ele.name);
   console.log(name);
   
   var region=name.filter((ele)=>ele.region);
   console.log(region);

   var subregion=name.filter((ele)=>ele.subregion);
   console.log(subregion);
   var population=name.filter((ele)=>ele.population);
   console.log(population);
}

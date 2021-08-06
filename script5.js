var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);

    data.forEach(element => {
        console.log(element.flag);
    });

    data.forEach(element => {
        console.log(element.name,element.region,element.subregion,element.population);
    });

}


let cityId = "2643743";

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&units=metric&appid=eb880ddfec72947d4ea6345bab2b4de0" , function(data){
    console.log(data);

    const icon = 'https://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
    const temp = Math.floor(data.list[0].main.temp);
    const weather = data.list[0].weather[0].description; 

    
    $('.icon').attr('src', icon);
    $('.temp').append(temp);
    $('.weather').append(weather);


});
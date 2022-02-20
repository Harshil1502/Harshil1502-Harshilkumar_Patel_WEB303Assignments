/*
    Assignment #4
    {Harshilkumar Dharmendrakumar Patel}
*/

$(function () {
    // your code here
    navigator.geolocation.getCurrentPosition(success, () => {
        $('#locationhere').html("Please Enable geolocation!");
    });
      
    function success(position){
        const lat2 = position.coords.latitude;
        const lon2 = position.coords.longitude;
        let lat1 = window.localStorage.getItem('lat1');
        let lon1 = window.localStorage.getItem('lon1');

        if(lat1&&lon1){
            $('header').html('<h1>Welcome Back User</h1>');
           let lat1 = window.localStorage.getItem("lat1");
           let lon1 = window.localStorage.getItem("lon1");
        let distance = calcDistanceBetweenPoints(lon1, lat1, lat2, lon2);
         $('#locationhere').html(`Your current location is: Latitude: ${lat2}, Longitude: ${lon2} <br/> Congratulations you travelled ${distance/1000} KM since last visit`);
        
        }else{
            $('header').html('<h1>Welcome To the distance calculator</h1>');
            $('#locationhere').html(`Your current location is: Latitude: ${lat2}, Longitude: ${lon2}`);
        }    
        localStorage.setItem("lat1", JSON.stringify(lat2));
        localStorage.setItem("lon1",JSON.stringify(lon2));
    }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});



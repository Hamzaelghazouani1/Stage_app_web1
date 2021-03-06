"use strict";
var latitude = 31.792305849269;
var longitude = -7.080168000000015;

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 7,
    });

    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });



}


function local() {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(p) {
                console.log(p);
                latitude = p.coords.latitude;
                longitude = p.coords.longitude;
                initMap();
            },
            function(e) {
                ipLookup();
            });
    } else {
        ipLookup();

        function ipLookup() {

        }
    }
}

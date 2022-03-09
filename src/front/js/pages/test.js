import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

let country = "FR";
let city = "Paris";
let base = "";
let location = ["Eiffel Tower", "Triumph Arc", "Trocadero"];

let resultObject = [];

let fetchURL = ""

let mapBoxToken = "pk.eyJ1IjoiYmVzbWFycXVlcyIsImEiOiJja3p2cGRucDQwMGliMm9rNnpuOG90MG9nIn0.5n3XuDKIqcxsIDs-1VGs7g";

//fetchURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?country=" + country + "&city=" + city + "&access_token=" + mapBoxToken;

for(let i = 0; i < location.length; i++){
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + location[i] + ".json?country=" + country + "&city=" + city + "&access_token=" + mapBoxToken , requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
}


const FetchTest = () => {
    return(
        <>
            <h1>this is a test</h1>
        </>
    )
}

export default FetchTest;
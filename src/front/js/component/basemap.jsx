import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import mapboxgl from "mapbox-gl";
import "../../styles/BaseMap.scss";

const BaseMap = () => {

    const { store, actions } = useContext(Context);

    mapboxgl.accessToken = store.mapBoxToken;

    useEffect(() => {
        new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [0,0],
            zoom: 9,
            });
    }, []);

        
    

    
    
        
    

    return (
        <>
            <div id="mapContainer" className="map"></div>
        </>
        )
};

export default BaseMap;

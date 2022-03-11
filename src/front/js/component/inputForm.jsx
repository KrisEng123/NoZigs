import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


function getFromMapBox () {

}

const InputForm = () => {

    const [country, setCountry] = useState("");

    const [city, setCity] = useState("");

    const [base, setBase] = useState("");

    const [location1, setLocation1] = useState("");
    const [location2, setLocation2] = useState("");
    const [location3, setLocation3] = useState("");

    const { store, actions } = useContext(Context);

    return(
        <>
            <h1>test</h1>
            <div className="container d-flex justify-content-center">
            <div className="col-4">
                
                    <select type="text" id="locations" className="form-control" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Select your country</option>
                        <option value="FR">France</option>
                        <option value="PT">Portugal</option>
                        <option value="SP">Spain</option>
                    </select>
                    <input type="text" id="locations" className="form-control" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}></input>
                    <input type="text" id="locations" className="form-control" placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)}></input>
                    <input type="text" id="location1" className="form-control" placeholder="Location1" value={location1} onChange={(e) => setLocation1(e.target.value)}></input>
                    <input type="text" id="location2" className="form-control" placeholder="Location2" value={location2} onChange={(e) => setLocation2(e.target.value)}></input>
                    <input type="text" id="location3" className="form-control" placeholder="Location3" value={location3} onChange={(e) => setLocation3(e.target.value)}></input>
                    <button className="btn-lg btn-light" onClick={() => actions.getLocationsFromFrontOffice(country,city,base,location1,location2,location3)}>Submit</button>
                    <button className="btn-lg btn-light" onClick={() => actions.fetchCoordinatesFromMapBox}>Get Coordinates</button>
               
            </div>
            </div>
            {/*<div className="container d-flex justify-content-center">
                <div className="col-4">
                    <h1>On JS file</h1>
                    <p>Country {country}</p>
                    <p>City {city}</p>
                    <p>Base {base}</p>
                    <p>Location1 {location1}</p>
                    <p>Location2 {location2}</p>
                    <p>Location3 {location3}</p>
                </div>
    </div>*/}

            
        </>
    )
}

export default InputForm;
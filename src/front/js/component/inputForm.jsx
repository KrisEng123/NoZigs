import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


function getFromMapBox () {

}

const InputForm = () => {

    const [name, setName] = useState("");
    
    const [country, setCountry] = useState("");

    const [city, setCity] = useState("");

    const [base, setBase] = useState("");

    const [locationsInput, setLocationsInput] = useState([]);
    let [formLocation, setFormLocation] = useState("");

    
    
    const { store, actions } = useContext(Context);

    function handleSubmit(event) {
		event.preventDefault();
		setFormLocation("");
	}

    function removeItem(i) {
		let temp = [...locationsInput];

		temp.splice(i, 1);

		setLocationsInput(temp);
	}

    return(
        <> 
            <div className="col-4">
                <form onSubmit={handleSubmit} className="mt-2 mb-2 justify-content-between">
                    <div className="col-12">
                        <input type="text" id="name" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} ></input>
                    </div>
                    
                    <div className="col-12">
                        <select type="text" id="country" className="form-control" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Select your country</option>
                            <option value="FR">France</option>
                            <option value="PT">Portugal</option>
                            <option value="SP">Spain</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <input type="text" id="city" className="form-control" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}></input>
                    </div>
                    <div className="col-12">
                        <input type="text" id="base" className="form-control" placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)}></input>
                    </div>
                    <div className="form-inline d-flex mt-2 mb-2 justify-content-between">
                        <div className="form-group col-10">
                            <input className="form-control" value={formLocation} type="text" onChange={(e) => setFormLocation(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="" onClick={() => setLocationsInput((prevState) => [...prevState,	formLocation])}>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                        </div>
                    </div>
                    {locationsInput.map((listEntry, i) => (
				<>
					<div className="d-flex justify-content-between mt-2 mb-2 ">
						<div key={i} className="col-10 bg-light bg-gradient pt-1 pb-1 ps-2 pe-2 border-bottom border-secondary">
							{listEntry}
						</div>
						<div className="col-1 me-2">
							<button
								className="btn btn-danger"
								onClick={() => removeItem(i)}>
								<i className="fas fa-minus-circle"></i>
							</button>
						</div>
					</div>
				</>
			))}
                </form>
                {name != "" && country != "" && city != "" && base != "" && locationsInput != "" ? 
                    <button className="btn-lg btn-success" onClick={() => actions.getLocationsFromFrontOffice(name,country,city,base,locationsInput)}>Submit</button>
                    : 
                    <button className="btn-lg btn-light" >Submit</button>
                }

                <button className="btn-lg btn-light" onClick={() => actions.fetchCoordinatesFromMapBox()}>Get Coordinates</button>

            </div>
            {/*
                <div className="col-4">
                    <h1>On JS file</h1>
                    <p>Country {country}</p>
                    <p>City {city}</p>
                    <p>Base {base}</p>
                    <p>Locations {locations}</p>
               
    </div>*/}

            
        </>
    )
}

export default InputForm;
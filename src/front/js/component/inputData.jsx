import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const InputData = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container d-flex justify-content-center">
            {<div className="col-4">
                <h1>On store file</h1>
                <p>Country {store.country}</p>
                <p>City {store.city}</p>
                <p>Base {store.base}</p>
                <p>Location1 {store.location1}</p>
                <p>Location2 {store.location2}</p>
                <p>Location3 {store.location3}</p>
                <p>mapBoxToken {store.mapBoxToken}</p>
            </div>}
            <p>testeVar {store.testeVar}</p>
           
        </div>
        </>
    )
}

export default InputData;

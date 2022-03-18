import React, { useState, useEffect, useContext } from "react";
import InputForm from "../component/inputForm.jsx";
import InputData from "../component/inputData.jsx";
import FetchData from "../component/fetchData.jsx";
import BestRoute from "../component/bestroute.jsx";
import BaseMap from "../component/basemap.jsx";

const Test = () => {
    return (
        <>
        <div className="container d-flex justify-content-between">
            <InputForm />
            <InputData />
            
        </div>
        <div className="container d-flex justify-content-between">
            <FetchData />
        </div>
        <div className="container d-flex justify-content-between">
            <BestRoute />
        </div>
        <div className="container d-flex justify-content-between">
            <div className="col-12">
                <BaseMap />
            </div>
        </div>
        </>
    )
}

export default Test
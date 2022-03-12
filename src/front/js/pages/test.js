import React, { useState, useEffect, useContext } from "react";
import InputForm from "../component/inputForm.jsx";
import InputData from "../component/inputData.jsx";
import FetchData from "../component/fetchData.jsx";

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
            
        </>
    )
}

export default Test
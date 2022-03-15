import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const FetchData = () => {

    const { store, actions } = useContext(Context);

    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult(store.resultObject);
        //console.log("useEffect", store.resultObject);
    }); 
    
    //console.log("component", store.resultObject);

    //console.log("const", result);

    return (
        <>
            <h1>__YEAHHHH BABY</h1>
            <p>{store.teste}</p>
            <p>
                {store.resultObject != "" ? store.resultObject[0].features[0].text : "empty"}
                {store.resultObject != "" ? store.resultObject[0].features[0].geometry.coordinates : "empty"}
                {/*result!= "" ? result[0].features[0].text : "empty"*/}
            </p>
            

            
            
        
        </>
    )
}

export default FetchData
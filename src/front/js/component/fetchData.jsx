import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const FetchData = () => {

    const { store, actions } = useContext(Context);

    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult(store.resultObject);
        console.log("useEffect", store.resultObject);
    },[store]); 
    
    console.log("component", store.resultObject);

    console.log("const", result);

    return (
        <>
            <h1>__YEAHHHH BABY</h1>
            <p>{store.teste}</p>
            <p>
                {store.resultObject.length}
            {result.length}
            </p>
            
            

            
            
        
        </>
    )
}

export default FetchData
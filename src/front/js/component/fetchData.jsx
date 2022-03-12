import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const FetchData = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <h1>__YEAHHHH BABY</h1>
        </>
    )
}

export default FetchData
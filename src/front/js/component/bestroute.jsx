import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const BestRoute = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            
            {<div className="col-12">
                <h1>Best Route</h1>
                {store.name != "" ? <h2> Your trip "{store.name}" to {store.city},{store.country}</h2>: ""}
                {store.bestRoute.map((listEntry, i) => (
                    <>
					<div className="d-flex justify-content-between mt-2 mb-2 ">
						<div
							key={i}
							className="col-10 bg-light bg-gradient pt-1 pb-1 ps-2 pe-2 border-bottom border-secondary">
							{listEntry}
						</div>
                        {i == 0 ? 
                        <div className="col-1 me-2">
							<button className="btn btn-success"	>
								<i className="fas fa-home"></i>
							</button>
						</div> 
                        : 
                        <div className="col-1 me-2">
							<button
								className="btn btn-danger"
								onClick={() => actions.removeItem(i)}>
								<i className="fas fa-minus-circle"></i>
							</button>
						</div>}
                        
                    </div>
				</>
			))}
            </div>}
           
      
        </>
    )
}

export default BestRoute
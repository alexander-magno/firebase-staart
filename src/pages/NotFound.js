import React from "react";
import clound  from "../images/cloud-error.svg"

export  const TesteError = () => {
    return (
        <div className="container">
        <div className="center">
            <h2>Error 404 Not Found</h2>
            <div className="container">
                <img src={clound}></img>
            </div>
        </div>
        </div>
    )
}
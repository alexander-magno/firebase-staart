import React from "react";
import logo from '../images/logo-staart.svg'
import logoPrimo from '../images/logo-grupo-primo.png'

export const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="footer-all">
                    <img src={logo}></img>
                    <img src={logoPrimo} className="img-size"></img>
                    <img src={logo}></img>
                </div>
            </div>
        </footer>
    )
}
import React from "react";
import logo from '../images/logo-staart.svg'

export const Header = () =>{
    return (
        <nav>
            <div className="container">
                <a className="navigation-brand" href="/profile"><img src={logo}></img></a>

            </div>
        </nav>
    )
}
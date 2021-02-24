import React from 'react';
import "./navBar.css";

function NavBar() {
    return (
        <div className="navBar">
            <div className="navBar__contents">
                <img 
                    className="navBar__logo"
                    src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49" 
                    alt="Netflix" 
                />

                <img 
                    className="navBar__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </div>
            <h1>This is the navBar</h1>
        </div>
    )
}

export default NavBar;

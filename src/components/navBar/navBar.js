import React from 'react';
import "./navBar.css";

function NavBar() {
    return (
        <div className="navBar navBar__black">
            <div className="navBar__contents">
                <img 
                    className="navBar__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix" 
                />

                <img 
                    className="navBar__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                />
            </div>
            {/* <h1>This is the navBar</h1> */}
        </div>
    )
}

export default NavBar;

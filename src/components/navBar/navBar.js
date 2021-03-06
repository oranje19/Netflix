import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "./navBar.css";

function NavBar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`navBar ${show && "navBar__black"}`}>
            <div className="navBar__contents">
                <img 
                    onClick={() => history.push("/")}
                    className="navBar__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="Netflix" 
                />

                <img 
                    onClick={() => history.push('/profile')}
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

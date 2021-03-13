import React from 'react';
import './loginScreen.css';

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img 
                    className="loginScreen__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix"
                />
                <button className="loginScreen__button">
                    Sign In
                </button>
                <div className="loginScreen__gradient"></div>
            </div>
            <div className="loginScreen__body">
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                </>
            </div>
        </div>
    )
}

export default LoginScreen;

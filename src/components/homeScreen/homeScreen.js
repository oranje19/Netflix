import React from 'react';
import Banner from '../banner/banner';
import NavBar from '../navBar/navBar';
import './homeScreen.css';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <NavBar />

            <Banner />

            {/* Row */}
        </div>
    )
}

export default HomeScreen;

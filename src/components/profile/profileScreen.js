import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import NavBar from '../navBar/navBar';
import PlansScreen from '../plans/plansScreen';
import './profileScreen.css';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <NavBar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <div className="profileScreen__avatar">
                        <img 
                            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                            alt=""
                        />
                        <span className="helpIcon">
                            <i className="far fa-question-circle fa-3x"></i>
                            <span class="tooltip">
                                <p>For DEMO purposes</p>
                                <br/>
                                <p>Use the following information:</p>
                                <br/>
                                <p>Testing Card Number:</p>
                                <p>4242 4242 4242 4242</p>
                                <br/>
                                <p>Date:</p>
                                <p>Any future date</p>
                                <br/>
                                <p>CVC:</p>
                                <p>Any 3 digits</p>
                                <br/>
                                <p>Address:</p>
                                <p>Any valid Address</p>

                            </span>
                        </span>
                    </div>
                    
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            
                            <PlansScreen />

                            <button 
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut"
                            >
                                    Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;

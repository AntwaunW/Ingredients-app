import Navbar from '../components/UpperNavBar';
import '../styles/userPage.scss';
import React, { useState, useRef } from 'react';
import ProfilePic from '../images/profile_pic.jpg';

function UserPage() {

    const [profilePic, setProfilePic] = useState(ProfilePic);

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const imageURL = URL.createObjectURL(file); //Temporary. Img will go away on refresh
        setProfilePic(imageURL);
    };

    return(
        
        <div className="user-pg-container" >
            <Navbar />
                <div className="user-info-container" >
                    <img 
                        src={profilePic} 
                        alt="user-profile-pic" 
                        width="80" height="80" 
                        className="user-img" 
                        />

                    <button 
                        className="user-profile-edit-btn"
                        onClick ={() => fileInputRef.current.click()}
                        >
                            
                            Change Image
                    </button>

                    <input 
                        type="file"
                        accept="image/*"
                        ref={fileInputRef} 
                        onChange={handleImageChange}
                        style={{ display: 'none' }} 
                        />
                       
                    <input type="text" placeholder="Name" className="name-text-box" />
                    <textarea 
                        rows="10" 
                        cols="40" 
                        id="Bio-area" 
                        placeholder="Bio" 
                        className="bio-text-box" 
                        />
                </div>
        </div>
    );
}

export default UserPage;
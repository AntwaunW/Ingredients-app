import '../styles/header.scss';
import profilePic from '../images/profile_pic.jpg';

function Header() {
    return (
        <div className="Header">
            <div>
                <img className="User-icon" src= {profilePic} alt="Profile-Image" width="50" height="50" />
            </div>
        </div>
    )
}

export default Header
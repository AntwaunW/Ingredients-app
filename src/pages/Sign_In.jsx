import '../styles/signin.scss';
import profilePic from '../images/profile_pic.jpg';

import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function SignIn() {

  const navigate = useNavigate();
    const Login_pg = () => {
            navigate('/Login');
    }

  return  (
    <>
      <div className="SignIn-pg">
        <div className="Image">
          <img className="User-icon2" src= {profilePic} alt="User-profile" width="50" height="50"/>
        </div>

        <div className="SignIn-btns" >
          <button className="Starting Login-btn" onClick={Login_pg}>Login</button>
          <button className="Starting SignUp-btn" onClick={() => alert('Sign Up coming soon!')}>Sign Up</button>
          <button className="Starting Try-btn" onClick={() => alert(' Guest Sign Up coming soon!')}>Try as Guest</button>
        </div>
          <div className="Socials">
            <a href="https:\\www.google.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https:\\www.google.com"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https:\\www.google.com"><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href="https:\\www.google.com"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className="Container-2">
            <div className="curves Darkgreen-2"></div>
            <div className="curves Lightgreen-2"></div>
            <div className="curves Black-2"></div>
            <div className="curves Orange-2"></div>
        </div>

      </div>
    </>
  )
}

export default SignIn;

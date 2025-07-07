
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="Social-icons">
            <a href="https:\\www.google.com" ><FontAwesomeIcon className="Facebook icon" icon={faFacebook} /></a>
            <a href="https:\\www.google.com" ><FontAwesomeIcon className="Insta icon" icon={faInstagram} /></a>
            <a href="https:\\www.google.com" ><FontAwesomeIcon className="X icon" icon={faXTwitter} /></a>
            <a href="https:\\www.google.com" ><FontAwesomeIcon className="Git icon" icon={faGithub} /></a>
        </div>
    )
};

export default Footer;
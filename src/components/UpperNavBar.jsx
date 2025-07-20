import '../styles/upperNavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

function upperNavBar() {
    return (
        <div>
            <ul className="NavBarIcons" >
                <li><a href="#"><FontAwesomeIcon icon={faHouse} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCalendarDays} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faBookmark} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
            </ul>
        </div>
    );
}

export default upperNavBar

//TODO: Add paths to icons to lead users to different pages
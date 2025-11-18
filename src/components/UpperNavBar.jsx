import { Link } from 'react-router-dom';
import '../styles/upperNavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDays, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

function upperNavBar() {
    return (
        <div>
            <ul className="NavBarIcons" >
                <Link to="/Landing">
                    <li>
                        <FontAwesomeIcon icon={faHouse} />
                    </li>
                </Link>

                <Link to="/Calendar">
                    <li>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </li>
                </Link>

                <Link to="/Favorites">
                    <li>
                        <FontAwesomeIcon icon={faBookmark} />
                    </li>
                </Link>

                <Link to="/UserPage">
                    <li>
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default upperNavBar

//TODO: Add paths to icons to lead users to different pages
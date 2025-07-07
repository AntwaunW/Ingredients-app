import '../styles/header.scss';
import foodImage from'../images/Food_image.jpg';

function WelcomeSection() {
    return (
        <div className="Welcome-section">
            <div className="Hero-image">
                <img src= {foodImage} alt="Hero_Image" height="150" width="150" />
            </div>
              <h2 className="Welcome">Welcome!</h2>
        </div>
    )
}

export default WelcomeSection
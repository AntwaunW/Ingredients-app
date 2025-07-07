import '../styles/footer.scss';
import { useNavigate } from 'react-router-dom';


function CookingButton() {
//code that takes the user to the next pg when they click on get cooking
   const navigate = useNavigate();
    const goToHome = () => {
            navigate('/Sign_in');
    }

    return (
        <div className="Cooking-btn">
            <button className="Cook-btn" onClick={goToHome}>Get Cooking!</button>
        </div>
    )
}

export default CookingButton
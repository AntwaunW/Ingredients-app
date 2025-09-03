
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';

function RecipeCard(props) {

    const [favorite, setFavorite] = useState(false);

    //runs as a failsafe until we have actual data for recipe
     if (!props.recipe) {
    return <p>No recipe data available.</p>;  // or just return null
  }

    return (
        <div>
            <div className="Card-container">
                <div className="Card-image">
                    <img src={props.recipe.image} alt="Card-Image" width="200" height="150" />
                </div>
                <div className="Card-info">
                    <h3 className="card-title" >{props.recipe.title}</h3>
                        <h4 className="Difficulty">{props.recipe.difficulty}</h4>
                            {/* code for the favorite heart to go from false to true */}
                            <FontAwesomeIcon icon={favorite ? faHeart : faHeartRegular} onClick={ () => setFavorite(!favorite)} />
                    
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
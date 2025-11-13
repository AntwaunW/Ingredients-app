
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';
import '../styles/recipeCard.scss';

function RecipeCard(props) {
    //Star rating code
    const [recipeRating, setRecipeRating] = useState(0);

    //state value for flipping the card back and forth
    const [cardFlipped, setCardFlipped] = useState(false);

    const flipCard = () => {
        setCardFlipped(!cardFlipped);
    }

    const [favorite, setFavorite] = useState(false);

    //runs as a failsafe until we have actual data for recipe
     if (!props.recipe) {
    return <p>No recipe data available.</p>;  // or just return null
  }

    return (
        <div>
            <div className="Card-container">
                {cardFlipped ? (
                    <>
                        <div className="backCard">
                            <div onClick={flipCard} >
                                <div className="card-back-ingredients" >{props.recipe.ingredients}</div>
                                    <h2 className="cook-time">Cook Time</h2>
                                {/*the code below maps over the star array to repeat the image for a five star rating system on the back of the card */}
                                    {/* Code below now allows a user to click on a star and allow for the stars before it to be highlighted as well */}
                                    {[1,2,3,4,5].map(star =>
                                        <FontAwesomeIcon className="star-ratings" key={star} icon={star <= recipeRating ? faStar : faStarRegular}onClick={(event) => {
                                                                                                                                event.stopPropagation()
                                                                                                                                setRecipeRating(star)}} />
                                )}
                            </div>
                                <button className="slc-recipe-btn">
                                     Select Recipe
                                 </button>
                                
                        </div>    
                    </>
                ) : (   
                <>
                    <div className="frontCard">
                        <div className="Card-image">
                            <img src={props.recipe.image} alt="Card-Image" width="150" height="100" onClick={flipCard} />
                        </div>
                        <div className="Card-info">
                            <h4 className="card-title" >{props.recipe.title}</h4>
                                <h5 className="Difficulty">{props.recipe.difficulty}</h5>
                                    {/* code for the favorite heart to go from false to true */}
                                    <FontAwesomeIcon icon={favorite ? faHeart : faHeartRegular} onClick={ () => setFavorite(!favorite)} />
                        </div>
                    </div>             
                </>
                )} 
            </div>
        </div>
    )
}

export default RecipeCard
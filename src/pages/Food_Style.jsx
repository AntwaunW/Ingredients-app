import '../styles/food_style.scss';
import NavBar from '../components/UpperNavBar';
import HeroImg from '../images/Food_image.jpg';
import FoodGroups from '../pages/FoodGroup.json';
import {useState} from 'react';

function FoodStyle() {

    const [foodSelected, setFoodSelected] = useState(0);
    const [selectedFood, setSelectedFood] = useState([]);

   const handleFoodSelectionToggle = () => {
        if (!currentFoodItem) {
            return;
        }
        const currentFoodId = currentFoodItem.id;

        if (selectedFood.includes(currentFoodId)) {
            const newSelectedFood = selectedFood.filter(id => id !== currentFoodId);
            setSelectedFood(newSelectedFood);
        } else {
            const newSelectedFood = [...selectedFood, currentFoodId];
            setSelectedFood(newSelectedFood);
        }
};

//this code will handle the next button functionality

    const handleNext = () => {
        setFoodSelected ((foodSelected + 1) % foodItemsToRender.length)
    };

//this code will be for the functionality of the previous button

    const handlePrevious = () => {
        setFoodSelected ((foodSelected -1 + foodItemsToRender.length) % foodItemsToRender.length)
    };

    const foodItemsToRender = FoodGroups[0].FoodGroup;

    const currentFoodItem = foodItemsToRender?.[foodSelected]; /*The ?. is like a seatbelt for your code. It prevents your app from crashing if the data you're trying to use isn't there for some reason. */ 

    // If the foodItemsToRender array is not yet available, we show a loading message.
    if (!foodItemsToRender) {
        return (
            <div className="food-style-container">
                <NavBar />
                <p className="text-gray-500 mt-20 text-center text-lg">Loading food options...</p>
            </div>
        );
    }

    return(
        <div>
            <NavBar />
                <h1 className="Style_of_food_header" >Style of Food</h1>
                    <img className="heroImage" src={HeroImg} alt="App Icon" height="150" width="150" />
            <p className="selectApplies">*Select all that applies</p>
            <div className="active-food-display"> {/* New container for the active food item */}
                {/* this is for the previous button and will disable if there is nothing to render */}
                <button 
                    onClick={handlePrevious} 
                    disabled={!foodItemsToRender || foodItemsToRender.length === 0}
                    className="prevBtn"
                >Previous</button>

                {/* This part of the code now runs only when we know currentFoodItem exists */}
                <button 
                    className={`active_food_button ${selectedFood.includes(currentFoodItem.id) ? 'selected' : ''}`} 
                    onClick={handleFoodSelectionToggle}
                >
                    {currentFoodItem.name}
                </button>

                    {/* this code is for the next button and will be disabled if there is nothing to render */}
                <button 
                    onClick={handleNext} 
                    disabled={!foodItemsToRender || foodItemsToRender.length === 0}
                    className="nextBtn"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FoodStyle;
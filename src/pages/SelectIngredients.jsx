import UpperNavBar from'../components/UpperNavBar';
import '../styles/selectIngredients.scss';
import FoodPic from '../images/Food_image.jpg';
import IngredientSets from '../pages/IngredientSets.json';
import { useState } from 'react';

function SelectIngredients() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const currentCategory = IngredientSets[categoryIndex];

  const handleCheckboxChange = (ingredient) => {
    setSelectedItems((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const midpoint = Math.ceil(currentCategory.items.length / 2);
  const leftItems = currentCategory.items.slice(0, midpoint);
  const rightItems = currentCategory.items.slice(midpoint);

  return (
    <div>
      <UpperNavBar />
      <h2 className="SelcIngrHead">Select Ingredients</h2>
      <div className="foodImage" >
      <img src={FoodPic} alt="Food-Image" width="60" height="60" />
      </div>
      <div className="ingredient-row">
        <h2>{currentCategory.category}</h2>
        <div className="ingredients-container">
          <ul className="ingredients-list">
            {leftItems.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
          <ul className="ingredients-list">
            {rightItems.map((item) => (
              <li key={item}>
                <label>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ingredient-navigation">
        <button
        className="previous btn"
          disabled={categoryIndex === 0}
          onClick={() => setCategoryIndex((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
        className="next btn"
          disabled={categoryIndex === IngredientSets.length - 1}
          onClick={() => setCategoryIndex((prev) => prev + 1)}
        >
          Next
        </button>
        <button className="finish-button">Finished</button>
      </div>
    </div>
  );
};

export default SelectIngredients;

/*
TODO: Store selected items
      link full page to other pages
      link finished page to next page
      find a was to add small space between boxes nd items
*/
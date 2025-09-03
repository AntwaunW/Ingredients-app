import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/UpperNavBar';

function GeneratedRecipes() {

     const mockRecipe = {
        title: "Delicious Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        difficulty: "Medium",
        favorited: false
    };

    return(
        <div>
            <Navbar />
            <RecipeCard recipe={mockRecipe} />
        </div>
    )
}

export default GeneratedRecipes;
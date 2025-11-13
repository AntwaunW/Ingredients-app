import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/UpperNavBar';
import {useState} from 'react'

function GeneratedRecipes() {

     const mockRecipe = [
     {
        id: 1,
        title: "Delicious Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        difficulty: "Medium",
        favorited: false,
        ingredients: "Beef patty, lettuce, tomato, cheese, bun"
    },
    {
        id: 2,
        title: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        difficulty: "Easy",
        favorited: false,
        ingredients: "Pasta, eggs, bacon, parmesan cheese"
    },
    {
        id: 3,
        title: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        difficulty: "Easy",
        favorited: false,
        ingredients: "Pasta, eggs, bacon, parmesan cheese"
    },
    {
        id: 4,
        title: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        difficulty: "Easy",
        favorited: false,
        ingredients: "Pasta, eggs, bacon, parmesan cheese"
    },
    {
        id: 5,
        title: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        difficulty: "Easy",
        favorited: false,
        ingredients: "Pasta, eggs, bacon, parmesan cheese"
    },
    {
        id: 6,
        title: "Pasta Carbonara",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
        difficulty: "Easy",
        favorited: false,
        ingredients: "Pasta, eggs, bacon, parmesan cheese"
    },

     ];

     // ---- Pagination setup ----
     const [currentPage, setCurrentPage] = useState(1);
     const recipesPerPage = 6; // --- Can adjust based on screen size ---

     const indexOfLastRecipe = currentPage * recipesPerPage;
     const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
     const currentRecipes = mockRecipe.slice(indexOfFirstRecipe, indexOfLastRecipe);


     const totalPages = Math.ceil(mockRecipe.length / recipesPerPage);

     const nextPage = () => {
        if (currentPage > totalPages) setCurrentPage(currentPage +1);
     };

     const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
     };

    return(
        <div>
            <Navbar />

            {/*Recipe Grid */}
            <div className="recipe-grid" >
                {currentRecipes.map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.id} />
                ))}
                {/*Pagination Controls */}
                <div className="pagination-controls">
                    <button onClick={prevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button onClick={nextPage} disabled={currentPage == totalPages}>
                        Next
                    </button>
                </div>
            </div>

            {/*The code below takes the new array of recipe cards, loops through them using .map and creates a card for each individual recipe */}
            <div className="recipe-grid" >
                {mockRecipe.map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe.id} />            
                ))}
            </div>

            
        </div>
    )
}

export default GeneratedRecipes;
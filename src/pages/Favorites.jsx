
import Navbar from '../components/UpperNavBar';
import React, { useMemo, useState } from "react";
import "../styles/favorites.scss";
import RecipeCard from "../components/RecipeCard";
import AddToCalendarModal from "../components/AddToCalendarModal";
import { useFavorites } from "../pages/FavoritesContext"


function FavoritesPage() {
    const { favorites, removeFavorite, toggleFavorite } = useFavorites();

    // search + start
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("recent"); // 'az', 'za', 'recent'
    const [showModalFor, setShowModalFor] = useState(null); // recipeto add to calendar

    // derived list
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = favorites.slice(); //copy
        if (q) {
            list = list.filter((r) => r.title.toLowerCase().includes(q));
        }
        if (sort === "az") {
            list.sort((a,b) => a.title.localeCompare(b.title));
        } else if (sort === "za") {
            list.sort((a,b) => b.title.localeCompare(a.title));
        } else if (sort === "recent") {
            // favorites are stored newest-first in context addFavorite push,sp leave as is 
        }
        return list;
    }, [favorites, query, sort]);

    function onAddToCalendar (recipe) {
        setShowModalFor(recipe);
    }

    function onModalClose() {
        setShowModalFor(null);
    }

    function onModalAdd(date) {
        // date saved inside AddToCalendarModal to LocalStorage
        // optionally show toast or feedback
        alert(`Saved "${showModalFor.title}" to ${date}`);
    }


    return(
       <div className="favorites-page">
        <Navbar />
            <h1 className="favorites-title">Your Favorites</h1>

            <div className="favorites-header">
                <input 
                    className="favorites-search-input"
                    placeholder="Search favorites..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                     />

                     <div className ="favorites-controls">
                        <select
                            className="filter-select"
                            disabled
                            title="Categories not implemented yet"
                        >
                            <option>All Categories</option>
                        </select>

                        <select
                            className="sort-select"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="az">Sort: A → Z</option>
                            <option value="za">Sort: Z → A</option>
                            <option value="recent">Recently Favorited</option>
                        </select>
                     </div>
                </div>

                <div className="favorites-grid">
                    {filtered.length === 0 ? (
                        <p className="empty-msg">No Favorites Yet</p>
                    ) : (
                        filtered.map((recipe) => (
                          <div className="recipe-card" key={recipe.id}>
                            {/* Use your RecipeCard for visuals */}
                            <RecipeCard
                            recipe={recipe}
                            isFavorite={true}
                            onToggleFavorite={() => toggleFavorite(recipe)}
                            />

                            <div className="recipe-card-actions">
                                <button
                                    className="calendar-btn"
                                    onClick={() => onAddToCalendar(recipe)}
                                >
                                    Add to calendar
                                </button>

                                <button
                                    className="unfavorite-btn"
                                    onClick={() => removeFavorite(recipe.id)}
                                >
                                    Remove Favorite
                                </button>
                            </div>
                          </div>  
                        ))
                    )}
                </div>

                {showModalFor && (
                    <AddToCalendarModal
                        recipe={showModalFor}
                        onClose={onModalClose}
                        onAdd={onModalAdd}
                    />
                )}
       </div>
    );
}

export default FavoritesPage;
import React, { createContext, useContext, useEffect, useState } from "react";

    const FavoritesContext = createContext();

    export function useFavorites() {
        return useContext(FavoritesContext);
    }

    export function FavoritesProvider({ children }) {
        const [favorites, setFavorites] = useState(() => {
            try {
                const raw = localStorage.getItem("favorites");
                return raw ? JSON.parse(raw) : [];
            } catch {
                return [];
            }
        });


    useEffect(() => {
        try {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } catch {}
    }, [favorites]);

    function addFavorite(recipe) {
        if (!favorites.some((f) => f.id === recipe.id)) {
            setFavorites((prev) => [{ ...recipe, favorited: true }, ...prev]);
        }
    }

    function removeFavorite(recipeId) {
        setFavorites((prev) => prev.filter((r) => r.id !== recipeId));
    }

    function toggleFavorite(recipe) {
        if (favorites.some((f) => f.id === recipe.id)) {
            removeFavorite(recipe.id);
        }
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
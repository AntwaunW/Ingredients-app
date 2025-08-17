import { useState, useEffect } from 'react';

function GenRecipes() {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <h1>Generating Page! Please wait...</h1>
        </div>
    );
};

export default GenRecipes;
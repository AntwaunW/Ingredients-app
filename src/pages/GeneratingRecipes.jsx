import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import '../styles/generating_recipes.scss';

function GenRecipes() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    const loadingMessages = [
        "Loading recipes...",
        "Finding ingredients...",
        "Mixing flavors...",
        "Preparing suggestions...",
        "Almost ready..."
    ];

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        const messageInterval = setInterval(() => {
            setMessageIndex(prev => (prev + 1) % loadingMessages.length);
        }, 2000);

        return () => clearInterval(messageInterval);
    }, []);

    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="food-animation">
                    <FontAwesomeIcon icon={faUtensils} className="cooking-icon" />
                </div>
                
                <h1 className="loading-title">Generating Your Recipes</h1>
                
                <p className="loading-message">{loadingMessages[messageIndex]}</p>
                
                <div className="progress-container">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="progress-percentage">{progress}%</span>
                </div>
            </div>
        </div>
    );
}

export default GenRecipes;
import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function RecipeList({recipeData}) {
    const navigate = useNavigate();

    const handleCook = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className = 'recipeList'>
            <ul>
                {recipeData.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <h4> {recipe.cookingTime} minutes to cook this dish</h4>
                        <p>{recipe.method}</p>
                        <button className='cookButton' onClick={() => handleCook(recipe.id)}>Cook this dish</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

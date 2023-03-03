import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeDataContext } from './recipedata';

export default function RecipeForm() {
    const { setRecipeData } = useContext(RecipeDataContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');
    const [ingredients, setIngredients] = useState([]);

    const handleTitleChange = (y) => {
        setTitle(y.target.value);
    };

    const handleCookingTimeChange = (y) => {
        setCookingTime(y.target.value);
    };

    const handleMethodChange = (y) => {
        setMethod(y.target.value);
    };

    const handleIngredientChange = (y, index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = y.target.value;
        setIngredients(updatedIngredients);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    };


    const handleSubmit = (y) => {
        y.preventDefault();
        const recipe = { title, cookingTime, method, ingredients };

        fetch('http://localhost:3001/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then(() => {
                fetch('http://localhost:3001/recipes')
                    .then(res => res.json())
                    .then(recipes => {
                        setRecipeData(recipes);
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='newRecipe'>
            <h2>New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3 htmlFor="title">Recipe title: </h3>
                    <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={handleTitleChange} />
                </div>
                <div>
                    <h3>Cooking Time(In minutes):</h3>
                    <input 
                    type="text" 
                    id="cookingTime" 
                    value={cookingTime} 
                    onChange={handleCookingTimeChange} />
                </div>
                <div>
                    <h3>Recipe ingredients:</h3>
                    {ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input 
                            type="text" 
                            value={ingredient} 
                            onChange={(y) => 
                            handleIngredientChange(y, index)} />
                            <button type="button" onClick={() => handleRemoveIngredient(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
                </div>
                <div>
                    <h3>Recipe method:</h3>
                    <input 
                    type="text" 
                    id="method" 
                    value={method} 
                    onChange={handleMethodChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
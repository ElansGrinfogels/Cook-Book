import { useState, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import { RecipeDataContext } from './components/recipedata';
import RecipeDisplay from './components/recipedisplay'
import RecipeForm from './components/recipeform';
import Recipes from './recipes';

import './index.css'

export default function Homepage() {
    const { recipeData, setRecipeData, ingredientData, setIngredientData } = useContext(RecipeDataContext);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/recipes')
            .then(res => {
                return res.json();
            })
            .then(recipes => {
                setRecipeData(recipes);
                const ingredients = recipes.map(recipe => recipe.ingredients);
                setIngredientData(ingredients);
            });
    }, [setIngredientData, setRecipeData]);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredRecipes = recipeData?.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <div className='homepage'>
                <Navbar handleSearch={handleSearch}></Navbar>
                <Routes>
                    <Route
                        path="/"
                        element={recipeData && ingredientData ? (
                                <Recipes searchTerm={searchTerm} recipeData={filteredRecipes} ingredientData={ingredientData} />
                            ) : null
                        }></Route>


                    <Route path="/recipeForm/new" 
                    element={<RecipeForm />}> </Route>


                    <Route path="/recipe/:id" 
                    element={<RecipeDisplay />}>  </Route>
                </Routes>
            </div>
        </>
    );
}
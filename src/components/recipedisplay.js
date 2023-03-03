import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeDataContext } from './recipedata';

export default function RecipeDisplay() {
    const { recipeData } = useContext(RecipeDataContext);
    const { id } = useParams();
    const recipe = recipeData ? recipeData.find(recipe => recipe.id === id) : null;
    var ingredients = "";


    if (recipe) {
        const ingredientList = [...recipe.ingredients]
        ingredientList.forEach(element => {
            ingredients = ingredients + element + " , ";
        }
        );

        ingredients = ingredients.slice(0, -2)

    }
    return (
        <div>
            {recipe ? (
                <div className='oneRecipe'>
                    <h2>{recipe.title}</h2>
                    <p>It takes about {recipe.cookingTime} minutes to cook this meal</p>
                    <p className='ingredients'>
                        {ingredients}
                    </p>
                    <p>{recipe.method}</p>
                </div>
            ) : (
                <h3>Nothing to see here...</h3>
            )}
        </div>
    );
}

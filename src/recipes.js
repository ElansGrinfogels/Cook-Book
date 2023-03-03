import React from 'react'
import RecipeList from './components/recipelist';


export default function Recipes({recipeData, ingredientData, searchTerm}) {
  if (searchTerm.trim() === "") {
    return(
      <div>
        {recipeData && ingredientData && <RecipeList recipeData={recipeData} ingredientData={ingredientData}></RecipeList>}
      </div>
    );
  }

  else{
    return(
      <div>
        <h2>Recipes containing {searchTerm}</h2>
        {recipeData && ingredientData && <RecipeList recipeData={recipeData} ingredientData={ingredientData}></RecipeList>}
      </div>
    );
  }
}
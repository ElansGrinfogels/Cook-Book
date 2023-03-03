import { createContext } from 'react';
import { useState } from 'react';

export const RecipeDataContext = createContext(null);

export function RecipeDataContextProvider({ children }) {
  const [recipeData, setRecipeData] = useState(null);
  const [ingredientData, setIngredientData] = useState(null);


  return (
    <RecipeDataContext.Provider value={{ recipeData, setRecipeData, ingredientData, setIngredientData }}>
      {children}
    </RecipeDataContext.Provider>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecipeDataContextProvider } from './components/recipedata';
import Homepage from './homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <RecipeDataContextProvider>
      <Homepage></Homepage>
    </RecipeDataContextProvider>
  </BrowserRouter>
);
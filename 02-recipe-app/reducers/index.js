import { combineReducers } from 'redux';
import recipesReducer from './recipes.reducer';
import ingredientsReducer from './ingredients.reducer';

// root reducer
export default combineReducers({
	recipes: recipesReducer,
	ingredients: ingredientsReducer
});

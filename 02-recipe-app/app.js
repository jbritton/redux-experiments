import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';
import logMiddleware from './middleware/log';

const initialState = {
	recipes: [
		{ name: 'Omelette' }
	],
	ingredients: [
		{
			recipe: 'Omelette',
			name: 'Egg',
			quantity: 2
		}
	]
};

const store = createStore(
	rootReducer,
	initialState,
	applyMiddleware(logMiddleware)
);

store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Bananas', 2));
window.store = store;

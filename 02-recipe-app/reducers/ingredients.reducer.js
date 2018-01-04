import { ADD_INGREDIENT } from '../constants/action.types';

export default (ingredients = [], action) => {
	switch(action.type){
		case ADD_INGREDIENT:
			const ingredient = {
				name: action.name,
				recipe: action.recipe,
				quantity: action.quantity
			};
			return ingredients.concat(ingredient);
	}

	return ingredients;
};
import { ADD_RECIPE } from '../constants/action.types';

export const addRecipe = (name) => {
	return {
		type: ADD_RECIPE,
		name
	};
};


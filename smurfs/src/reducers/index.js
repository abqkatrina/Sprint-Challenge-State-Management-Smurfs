import { ADD_SMURF, REMOVE_SMURF } from '../actions/';

export const initialState = {
    smurf: [{
      name: 'Brainey',
      age: 200,
      height:'5cm',
      id: Date.now()
    }]
};

export const Reducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_SMURF:
			return {
				...state,
				smurf: {
					...state.smurf,
					smurf: action.payload
				}}
		

		case REMOVE_SMURF:
			return {
				...state,
				smurf: {
					...state.smurf,
					smurf: state.smurf.filter( smurf => 
						smurf.id !== action.payload.id),			
				}}
	

		default:
			return state;
	}
};
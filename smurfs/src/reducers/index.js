// import { GET_SMURF_START, GET_SMURF_WIN, GET_SMURF_LOSE, ADD_SMURF, DELETE_SMURF } from "../actions";


export const initialState = {
		smurfs: [
			{
				name: 'Brainey',
				age: '200',
				height: '5cm',
				id: 0
			}
		],
		isCatching: false
};

export const Reducer = (state = initialState, action) => {

	switch (action.type) {

		case 'GET_SMURF_START':
			return{
				...state,
				isCatching: true
			}

		case 'GET_SMURF_WIN':
			return{
				...state,
				smurfs: action.payload,
				isCatching: false
			}

		case 'GET_SMURF_LOSE':
			return{
				...state,
				isCatching: false
			}	

		case 'ADD_SMURF':
			return {
				...state,
				smurfs: [ ...state.smurfs, action.payload],
				isCatching: false
			}
		

		case 'DELETE_SMURF':
			return {
				...state,
				smurfs: [
					...state.smurfs.filter( smurf => 
					smurf.id !== action.payload.id)	
				],
				isCatching: false
			}
	

		default:
			return state;
	}
};
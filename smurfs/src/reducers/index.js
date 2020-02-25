
export const initialState = {
		smurfs: [
			{
				name: '',
				age: '',
				height: '',
				id: Date.now()
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
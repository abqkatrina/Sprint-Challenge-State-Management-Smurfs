
import axios from 'axios';
export const ADD_SMURF ='ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';

export const addSmurf = (smurf) => dispatch => {

	return axios.post('http://localhost:3333/smurfs', smurf)
	.then(response => {
		// console.log(response),
		dispatch({ type: ADD_SMURF, payload: response.data})
	})
	.catch(error => console.log('no add smurf action', error))
}



export function removeSmurf(smurf) {
	
	axios.delete('http://localhost:3333/smurfs/'`${smurf.id}`)
}

import axios from 'axios';


export const PLUS_SMURF ='PLUS_SMURF';
export const MINUS_SMURF = 'MINUS_SMURF';




export const addSmurf = (smurf) => dispatch => {

	return axios.post('http://localhost:3333/smurfs', smurf)
	.then(response =>
		dispatch({ type: PLUS_SMURF, payload: response.data}))	
	.catch(error => console.log('no add smurf action', error)
	)
}



export const removeSmurf = (smurf) => dispatch => {
	
	// axios.delete('http://localhost:3333/smurfs/'`${smurf.id}`)
	// .then(response => 
	// 	dispatch({ type: MINUS_SMURF, payload: response.data}))
	// .catch(error => console.log('no adeletesmurf action', error)
	// )
}
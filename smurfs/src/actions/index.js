
import axios from 'axios';

// export const GET_SMURF_START = 'GET_SMURF_START';
// export const GET_SMURF_WIN = 'GET_SMURF_WIN';
// export const GET_SMURF_LOSE = 'GET_SMURF_LOSE';
// export const ADD_SMURF = 'ADD_SMURF';
// export const DELETE_SMURF = 'DELETE_SMURF';


export const getSmurf = () => dispatch => {
	axios.get(`http://localhost:3333/smurfs`)
	.then(response => {
		console.log(response.data)
		dispatch({ type: 'GET_SMURF_WIN', payload: response.data})})
	.catch(error => dispatch({ type: 'GET_SMURF_LOSE', payload: error}))
}



export const addSmurf = newSmurf => dispatch => {

	return axios.post(`http://localhost:3333/smurfs`, newSmurf)
	.then(response =>
		dispatch({ type: 'ADD_SMURF', type: 'GET_SMURF_WIN', payload: response.data}))
	.catch(error => console.log('no add smurf action', error)
	)
}



export const deleteSmurf = (smurf) => dispatch => {
	
	axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
	.then(response => 
		dispatch({ type: 'DELETE_SMURF', payload: response.data}))
	.catch(error => console.log('no deletesmurf action', error)
	)
}
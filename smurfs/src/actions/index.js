
import axios from 'axios';


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
		dispatch({ type: 'ADD_SMURF', payload: response.data}))	
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
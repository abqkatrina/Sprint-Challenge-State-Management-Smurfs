import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf, removeSmurf } from './actions/';
// import Smurf from './components/Smurf';
import axios from 'axios';
import "./SmurfApp.css";

const SmurfApp = props => {

const [smurf, setSmurf ] = useState({ name:'', age:'', height: '', id: Date.now() });



 const addSmurf = event => {
	 event.preventDefault();
	 props.addSmurf(smurf);
	 setSmurf({name:'', age:'', height: ''})
 }

const handleChanges = () => {

}

 axios.get('http://localhost:3333/smurfs')
 .then(response => console.log(response.data))


	return (
		<div className="container">
			<button onClick={setSmurf}>O</button>
		<form onSubmit={addSmurf}>
            <div>
                <input type='text'  onChange={handleChanges} value={smurf.name} placeholder='Smurf Name'/>
                <input type='text'  onChange={handleChanges} value={smurf.age} placeholder='Smurf Age'/>
                <input type='text'  onChange={handleChanges} value={smurf.height} placeholder= 'Smurf Height'/>
                <button type='submit' onClick={addSmurf}>Smurf!</button>
            </div>
        </form>
		<div className='smurf-list'>
				<h4>the SMURFS</h4>
        		{/* <ul>
					{props.data.map(smurf => { return(
						<li><Smurf key={smurf.id} removeSmurf={removeSmurf} /></li>
					)})}
				</ul> */}
		</div>

		</div>
	);
					
}
  


const mapStateToProps = state => {
	return {
    smurf: state.smurf
	};
};

export default connect(
	mapStateToProps,
	{  addSmurf, removeSmurf }
)(SmurfApp);

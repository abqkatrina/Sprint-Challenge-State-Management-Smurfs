import React from 'react';
import { connect } from 'react-redux';
import { addSmurf, removeSmurf } from './actions/';
import Smurf from './components/Smurf';
import "./SmurfApp.css";

const SmurfApp = props => {
	

 const addSmurf = event => {
	 event.preventDEfault();
	 props.addSmurf(event.target.value)
 }



	return (
		<div className="container">

<			form>
            <div>
                <input type='text'  placeholder='Smurf Name'/>
                <input type='text'  placeholder='Smurf Age'/>
                <input type='text'  placeholder= 'Smurf Height'/>
                <button type='submit' onClick={addSmurf}>Smurf!</button>
            </div>
           
        	</form>
			<div className='smurf-list'>
				<h4>the SMURFS</h4>
        		<ul>
					{props.smurfs.map(smurf => { return(
						<li><Smurf key={smurf.id} removeSmurf={removeSmurf} /></li>
					)})}
				</ul>
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
	{ addSmurf, removeSmurf }
)(SmurfApp);

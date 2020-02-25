import React from "react";
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


const Smurf = props => {


	return (
		<div className="profile">
			<p>Name :{props.name},
			Age: {props.age},
			Height: {props.height},
			</p>
			<button onClick={deleteSmurf}>X</button>
		</div>
	);
}

const mapStateToProps = state => {
	return{
		...state,
		smurf: state.smurf
	}
}

export default connect(
	mapStateToProps,
	{ deleteSmurf }
)(Smurf);

import React from "react";
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


const Smurf = props => {


	return (
		<div className="profile">
			<p>Name :{props.name},
			Age: {props.age},
			Height: {props.height} 
			<span>  </span><button onClick={props.deleteSmurf}>X</button></p>
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

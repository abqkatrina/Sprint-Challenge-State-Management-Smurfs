import React from "react";


const Smurf = props => {


	return (
		<div className="profile">
			{props.smurf.name},
			{props.smurf.age},
			{props.smurf.height},
			{props.smurf.id}
			<button onClick={props.removeSmurf}>X</button>
		</div>
	);
}

export default Smurf;

import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

function Smurf() {
	const smurf = useContext(SmurfContext);

	return (
		<div className="profile">
			{smurf.name}, {smurf.age}, {smurf.height}, {smurf.id}
		</div>
	);
}

export default Smurf;

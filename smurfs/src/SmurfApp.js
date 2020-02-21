import React, { useState, useEffect } from "react";
import { smurfs } from '../server';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';
import { SmurfContext } from './contexts/SmurfContext';
import "./SmurfApp.css";

function SmurfApp() {
	const [smurf, setSmurf] = useState({});

	useEffect(() => {
		setSmurf({ name: "Brainey", age: "200", height: '5cm', id: 0 });
	}, []);

	console.log(SmurfContext);
	return (
		<div className="container">
			<SmurfContext.Provider value={smurf}>
				<SmurfForm />
        		<SmurfList />
			</SmurfContext.Provider>
		</div>
	);
}
  


export default SmurfApp;

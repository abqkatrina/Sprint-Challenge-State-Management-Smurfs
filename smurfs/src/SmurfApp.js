import React from 'react';
import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';
import "./SmurfApp.css";


const SmurfApp = () => {

	return (
		<div className="container">
			<SmurfForm />
			<SmurfList />
		</div>
	);

}
  

export default SmurfApp;
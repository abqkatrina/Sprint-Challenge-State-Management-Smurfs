import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import React, { useState } from 'react';


const SmurfForm =  props => {

    const [smurf, setSmurf] = useState({});
   
   const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
   }

   const addedSmurf = event => {
    event.preventDefault();
    props.addSmurf(smurf);
    setSmurf({name: smurf.name, age: smurf.age, height: smurf.height, id: Date.now()})
    
  };

    return (
        <form onSubmit={addedSmurf}>
            
                <input type='text'  id='name' name='name' onChange={handleChanges} value={smurf.name} placeholder='Smurf Name'/>
                <input type='text'  id='age' name='age' onChange={handleChanges} value={smurf.age} placeholder='Smurf Age'/>
                <input type='text'  id='height' name='height' onChange={handleChanges} value={smurf.height} placeholder= 'Smurf Height'/>
                <button type='submit' onClick={addedSmurf}>Add A Smurf!</button>
            
    </form>
    )
}

const mapStateToProps = state => {
    return{
        smurf: state.smurf
    }
}


export default connect(
	mapStateToProps,
	{  addSmurf }
)(SmurfForm);

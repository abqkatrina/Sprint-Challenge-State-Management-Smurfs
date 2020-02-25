import Smurf from './Smurf';
import { getSmurf } from '../actions';
import { connect } from 'react-redux';
import React from 'react';

const SmurfList = props => {

    return (
        <div className='smurf-list'>
            <h4>the SMURFS</h4>
            <button type='button' onClick={() => props.getSmurf()}>get smurfy</button>
            <div>
                {props.smurfs.map( smurf => { 
                    return(
                    <Smurf key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
	return {
        smurfs: state.smurfs
	};
};

export default connect(
	mapStateToProps,
	{ getSmurf }
)(SmurfList);

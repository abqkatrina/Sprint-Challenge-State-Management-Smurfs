import React from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfForm= () => {
    

    function addSmurf() {
        
    };

    return(
        <form>
            <div>
                <input type='text' value='name' placeholder='Smurf Name' />
                <input type='text' value='age' placeholder='Smurf Age' />
                <input type='text' value='height' placeholder= 'Smurf Height'/>
                <button type='submit' onClick={addSmurf}>Smurf!</button>
            </div>
            <div>

            </div>
        </form>
    );
}

export default SmurfForm;
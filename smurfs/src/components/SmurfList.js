
import React from 'react';


const SmurfList = (props) => {

  return (
    <div className="smurfs">
      <h4>Smurfs</h4>
          {props.smurfs.map(smurf=> (
            <Smurf key={smurf.id} />
          ))}
    </div>
  );
};

export default SmurfList;
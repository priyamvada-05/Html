import React from 'react';

const question= (props)=> {

    const handleStart=()=>{
      props.history.push('/question1')
    }
  return (
        <div className="App">
      <h1> Start Test</h1>
      <button onClick={handleStart}>Start</button>

     
    </div>
  );
}

export default question;
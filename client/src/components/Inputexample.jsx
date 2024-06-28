import React from 'react';
import InputProvider from './Inputcontext';
import InputPage from './InputPage';
 //This is just an example

const Inputexample = () => {
  return (
    <InputProvider>
        <div>
            <InputPage/>
        </div>
    </InputProvider>
  );
};

export default Inputexample;

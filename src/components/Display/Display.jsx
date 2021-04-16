import React, { useContext } from 'react';
import { DrumContext } from '../../context/DrumContext';

import './Display.scss';


const Display = () => {
    
    const {state, bankSetter, displaySetter, volSetter} = useContext(DrumContext);

    const onChangeHandler = (e) => {
        const value = e.target.value;
        volSetter(value);
        displaySetter(`Volume:${value}`);
     };

     const bankChangeHandler = () => {
         bankSetter();
         if(state.bank){
             return displaySetter('bank-one')
         }
         displaySetter('bank-two');
     }

    return (
        <div className="display-container">
            <p id="display">
                {state.display}
            </p>
            <input
                onChange={onChangeHandler} 
                className="volume-slider" 
                volume={state.volume} 
                min={0} 
                maxLength={100} 
                type="range" 
                name="volume" 
                id="volume"/>
            <div className="bank-changer">
                <p>Bank</p>
                <div className="bank-wrapper">
                    <div onClick={bankChangeHandler} className={`bank-btn ${state.bank ? 'right' : 'left'}`}></div>
                </div>
            </div>
        </div>
    )
};


export default Display;
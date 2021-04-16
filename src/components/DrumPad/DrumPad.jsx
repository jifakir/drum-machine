import React, { useContext } from 'react';
import { DrumContext } from '../../context/DrumContext';
import {bankOne, bankTwo} from '../../data';
import './DrumPad.scss';
import PadItem from './PadItem';

const DrumPad = ({volume}) => {
    const {state} = useContext(DrumContext);
    const bankState = state.bank ? bankOne : bankTwo;
    return (
    <div className="drum-pad-container">
        {
            bankState.map((item, idx) => <PadItem key={idx} item={item} volume={volume} />)
        }
    </div>
    )
};

export default DrumPad;
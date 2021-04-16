import React, { createContext, useReducer } from 'react';

export const DrumContext = createContext();

const drumReducer = (state , action) => {
    
    switch(action.type){
        case 'CLICKED_PAD':
            const display = action.display;
            return {...state, display};
        case 'CHANGED_VOLUME':
            const volume = action.volume;
            return {...state, volume};
        case 'CLICKED_BANK':
            return {...state, bank: !state.bank};
        case 'CLICKED_POWER':
            return {...state, power: !state.power};
        default:
            return 'Wrong Dispatch Keyword';
    }
};

const DrumProvider = ({children}) => {

    const [state, dispatch] = useReducer(drumReducer, {
        display: '',
        bank: true,
        power: true,
        volume: 0
    });

    const bankSetter = () => {
        dispatch({type: 'CLICKED_BANK'})
    };
    const powerSetter = () => {
        dispatch({type: 'CLICKED_POWER'})
    };
    const displaySetter = display => {
        dispatch({type: 'CLICKED_PAD', display})
    };
    const volSetter = volume => {
        dispatch({type: 'CHANGED_VOLUME', volume})
    };
    return (
        <DrumContext.Provider value={{state, bankSetter, powerSetter, displaySetter, volSetter}}>
            {children}
        </DrumContext.Provider>
    )
};


export default DrumProvider;
import React, {useRef, useEffect, useContext, useState} from 'react';
import { DrumContext } from '../../context/DrumContext';

import './PadItem.scss';


const PadItem = ({item}) => {

    const [active, setActive] = useState(false);
    const {keyCode, keyTrigger, id, url } = item;

    const {state, displaySetter} = useContext(DrumContext);

    const audRef = useRef();

    useEffect(() => {
        window.addEventListener("keydown", onPlayHandler);
        return () => window.removeEventListener("keydown", onPlayHandler);
      });
    
      const onPlayHandler = (e) => {
        if (e.keyCode === keyCode) {
          onClickHandler();
        }
      };

    const onClickHandler = () => {
        displaySetter(id);
        audRef.current.volume =  state.volume/ 100;
        audRef.current.currentTime = 0;
        audRef.current.play();
        setActive(true);
        const timeout = setTimeout(() => setActive(false), 100);
        clearTimeout(timeout);
      };

      useEffect(() => {
        let timeout;
        if(active){
           timeout = setTimeout(() => setActive(false), 50);
        }
        return () => clearTimeout(timeout)
      },[active]);

    return (
        <div id={keyTrigger} className={`drum-pad ${active ? 'active' : ''}`} onClick={onClickHandler}>
            <audio ref={audRef} src={url} id={keyTrigger} className="clip">
                <source src={url} type="audio/mpeg" />
                <source src={url} type="audio/ogg" />
                <source src={url} type="audio/wav" />
            </audio>
            {keyTrigger}
        </div>
    )
};


export default PadItem;
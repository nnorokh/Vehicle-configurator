import React, { useState } from 'react';
import './optionItem.css';

import image from './icons8-hummer-ios/icons8-hummer-50.png';

function Hummer(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 4;
    let price = 24000;
    // Function to handle click inside function
    function clicker(){
        setChoosen(choosen + 1);
        // Handle click outside function
        props.clickHandler(index, price, choosen);
    }

    return <div 
            className={props.current == index ? 'item choosen' : 'item'}
            onClick={() => clicker()}>
        <img src={image} alt="image"/>
        <p className='carName'>Hummer</p>
    </div>;
}
export default Hummer;
import React, { useState } from 'react';
import './optionItem.css';

import image from './icons8-camper-ios/icons8-camper-50.png';

function Camper(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 1;
    let price = 27000;
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
        <p className='carName'>Camper</p>
    </div>;
}
export default Camper;
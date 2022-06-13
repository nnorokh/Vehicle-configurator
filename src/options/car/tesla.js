import React, { useState } from 'react';
import './optionItem.css';

import image from './icons8-tesla-model-x-ios/icons8-tesla-model-x-50.png';

function Tesla(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 5;
    let price = 28500;
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
        <p className='carName'>Electro car</p>
    </div>;
}
export default Tesla;
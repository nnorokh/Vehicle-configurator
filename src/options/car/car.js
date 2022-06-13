import React, { useState } from 'react';
import './optionItem.css';

import image from './icons8-car-ios/icons8-car-50.png';

function CarItem(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 0;
    let price = 13000;
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
        <p className='carName'>Car</p>
    </div>;
}
export default CarItem;
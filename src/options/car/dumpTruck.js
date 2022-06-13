import React, { useState } from 'react';
import './optionItem.css';

import image from './icons8-dump-truck-ios/icons8-dump-truck-50.png';

function DumpTruck(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 2;
    let price = 33000;
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
        <p className='carName'>Dump</p>
    </div>;
}
export default DumpTruck;
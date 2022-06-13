import React, { useState } from 'react';
import './tire.css';

import image from './icons8-tire-ios/icons8-tire-50.png';

function TireBasic(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 0;
    let price = 100;
    // Function to handle click inside function
    function clicker(){
        setChoosen(choosen + 1);
        // Handle click outside function
        props.clickHandler(index, price, choosen);
    }

    return <div 
            className={props.current == index ? 'item choosen left-tire' : 'item left-tire'}
            onClick={() => clicker()}>
            <img src={image} alt="image"/>
        <p className='carName'>Tire</p>
    </div>;
}
export default TireBasic;
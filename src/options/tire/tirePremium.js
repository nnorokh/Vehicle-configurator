import React, { useState } from 'react';
import './tire.css';

import image from './icons8-tire-ios/icons8-tire-50.png';

function TirePremium(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 1;
    let price = 900;
    // Function to handle click inside function
    function clicker(){
        setChoosen(choosen + 1);
        // Handle click outside function
        props.clickHandler(index, price, choosen);
    }

    return <div 
            className={props.current == index ? 'item choosen right-tire' : 'item right-tire'}
            onClick={() => clicker()}>
            <img src={image} alt="image"/>
        <p className='carName'>Tire x2</p>
    </div>;
}
export default TirePremium;
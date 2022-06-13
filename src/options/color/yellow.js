import React, { useState } from 'react';
import './color.css';

// import image from './icons8-car-ios/icons8-car-50.png';

function Yellow(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 0;
    let price = 2500;
    // Function to handle click inside function
    function clicker(){
        setChoosen(choosen + 1);
        // Handle click outside function
        props.clickHandler(index, price, choosen);
    }

    return <div 
            className={props.current == index ? 'item choosen yellow' : 'item yellow'}
            onClick={() => clicker()}>
    </div>;
}
export default Yellow;
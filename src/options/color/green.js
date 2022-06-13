import React, { useState } from 'react';
import './color.css';


function Green(props){
    // State hook
    const [choosen, setChoosen] = useState(1);
    // Unique values
    let index = 2;
    let price = 2500;
    // Function to handle click inside function
    function clicker(){
        setChoosen(choosen + 1);
        // Handle click outside function
        props.clickHandler(index, price, choosen);
    }

    return <div 
            className={props.current == index ? 'item choosen green' : 'item green'}
            onClick={() => clicker()}>
    </div>;
}
export default Green;
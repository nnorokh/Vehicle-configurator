import React from 'react';
import './colorPart.css';

//Import items for option list
import Yellow from './yellow';
import Red from './red';
import Green from './green';
import Purple from './purple';
import Blue from './blue';

class ColorPart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {current: -1, price: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index, newPrice, clicks) {
        if(index == this.state.current && clicks % 2 == 0){
            this.setState({
                current: -1,
                price: 0,
            });
        }else{
            this.setState(prevState => ({
                current: index,
                price: newPrice,
            }));
        }
        this.props.priceUpdater(newPrice);
      }

    render() {
        return(
            <div className={this.state.current == -1 ? "wrapper-color-part" : "wrapper-color-part active"}>
                <Yellow clickHandler={this.handleClick} current={this.state.current}></Yellow>
                <Red clickHandler={this.handleClick} current={this.state.current}></Red>
                <Green clickHandler={this.handleClick} current={this.state.current}></Green>
                <Purple clickHandler={this.handleClick} current={this.state.current}></Purple>
                <Blue clickHandler={this.handleClick} current={this.state.current}></Blue>
            </div>
        );
    }
}
export default ColorPart;
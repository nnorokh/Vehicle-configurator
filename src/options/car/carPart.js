import React from 'react';
import './carPart.css';

//Import items for option list
import CarItem from "./car";
import Camper from "./camper";
import DumpTruck from './dumpTruck';
import Hummer from './hummer';
import Tesla from './tesla';



class CarPart extends React.Component{
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
            this.props.priceUpdater(0);
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
            <div className={this.state.current == -1 ? "wrapper" : "wrapper active"}>

                {/* <p className='title'>Firstly, select vehicle type: </p> */}
                <CarItem clickHandler= {this.handleClick} current={this.state.current}></CarItem>
                <Camper clickHandler= {this.handleClick} current={this.state.current}></Camper>
                <DumpTruck clickHandler= {this.handleClick} current={this.state.current}></DumpTruck>
                <Hummer clickHandler= {this.handleClick} current={this.state.current}></Hummer>
                <Tesla clickHandler= {this.handleClick} current={this.state.current}></Tesla>
            </div>
        );
    }
}
export default CarPart;
import React from 'react';
import './configurator.css';

//Import items for option menu
import CarPart from "./options/car/carPart";
import ColorPart from './options/color/colorPart';
import TirePart from './options/tire/tirePart';

class Configurator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {totalCost: 0, p0: 0, p1: 0, p2: 0, p3: 0};

        this.priceUpdater0 = this.priceUpdater0.bind(this);
        this.priceUpdater1 = this.priceUpdater1.bind(this);
        this.priceUpdater2 = this.priceUpdater2.bind(this);
        this.priceUpdater3 = this.priceUpdater3.bind(this);
    }
   
    //  Function to update prices
    
    priceUpdater0(newPrice) {
        this.setState(prevState => ({
            p0: newPrice,
            totalCost: prevState.p1 + prevState.p2 + prevState.p3 + newPrice
          }));
      }
    priceUpdater1(newPrice) {
        this.setState(prevState => ({
            p1: newPrice,
            totalCost: prevState.p0 + prevState.p2 + prevState.p3 + newPrice
        }));
    }
      priceUpdater2(newPrice) {
        this.setState(prevState => ({
            p2: newPrice,
            totalCost: prevState.p1 + prevState.p0 + prevState.p3 + newPrice
          }));
      }
      priceUpdater3(newPrice) {
        this.setState(prevState => ({
            p3: newPrice,
            totalCost: prevState.p1 + prevState.p2 + prevState.p0 + newPrice
          }));
      }

    render() {
        return(
            <div className='configurator'>
                <p className='priceTitle'>Total price: {this.state.totalCost}</p>
                <CarPart priceUpdater={this.priceUpdater0}></CarPart>
                <ColorPart priceUpdater={this.priceUpdater1}></ColorPart>
                <TirePart priceUpdater={this.priceUpdater2}></TirePart>
            </div>
        );
    }
}
export default Configurator;
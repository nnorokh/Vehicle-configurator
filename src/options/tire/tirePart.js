import React from 'react';
import './tirePart.css';

//Import items for option list
import TireBasic from './tireBasic';
import TirePremium from './tirePremium';

class TirePart extends React.Component{
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
            <div className={this.state.current == -1 ? "wrapper-tire" : "wrapper-tire active"}>

                {/* <p className='title'>Firstly, select vehicle type: </p> */}
                <TireBasic clickHandler= {this.handleClick} current={this.state.current}></TireBasic>
                <TirePremium clickHandler= {this.handleClick} current={this.state.current}></TirePremium>
            </div>
        );
    }
}
export default TirePart;
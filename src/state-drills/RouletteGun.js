import React, { Component } from 'react';

export default class RouletteGun extends Component {
    
    state = {
        chamber: null, 
        spinningTheChamber: false
    }

    handleTrigger = () => {
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8);
            this.setState({chamber: randomChamber, spinningTheChamber: false})
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    renderDisplay = () => {
       const { spinningTheChamber, chamber } = this.state;
       const { bulletInChamber } = this.props;
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
          } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
          } else {
            return 'you\'re safe!'
          }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleTrigger}>Pull the trigger!</button>
                <p>{this.renderDisplay()}</p>
            </div>
        );
    }
}

RouletteGun.defaultProps = { bulletInChamber: 8 };

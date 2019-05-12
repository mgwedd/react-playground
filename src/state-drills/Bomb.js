import React, { Component } from 'react';

export default class Bomb extends Component {
    
    state = {
        bomb: '',
        interval: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({interval: this.state.interval + 1})
            const divBy2 = this.state.interval % 2 === 0;
            const isOrAbove8 = this.state.interval >= 8;
            if (isOrAbove8) {
                this.setState({bomb: 'BOOOOOM !!!'})
            } else if (divBy2) {
                this.setState({bomb: 'tick'})
            } else {
                this.setState({bomb: 'tock'})
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>{this.state.bomb}</p>
            </div>
        );
    }
}
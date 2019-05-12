import React, { Component } from 'react';

export default class HelloWorld extends Component {
    
    state = {
        who: 'World'
    }

    handleButtonClick = (e) => {
        this.setState({who: e.target.value});
        console.log('this is state: ', this.state)
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}.</p>
                <button onClick={(e) => this.handleButtonClick(e)} value='World'>World</button>
                <button onClick={(e) => this.handleButtonClick(e)} value='Friend'>Friend</button>
                <button onClick={(e) => this.handleButtonClick(e)} value='React'>React</button>
            </div>
        );
    }
}
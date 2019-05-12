import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RouletteGun from './RouletteGun';

describe('RouletteGun Component', () => {

    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RouletteGun />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
    const tree = renderer
        .create(<RouletteGun />)
        .toJSON();
    expect(tree).toMatchSnapshot();  
    });
    
});
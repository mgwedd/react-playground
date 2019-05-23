import React from 'react';
import ReactDOM from 'react-dom';
import CountrySelector from '../CountrySelector';

describe('CountrySelector Component ', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountrySelector />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
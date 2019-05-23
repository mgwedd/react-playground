import React, { Component } from 'react';
import './Styles/CountrySelector.css';

export default class CountrySelector extends Component {

  changeSelection(value) {
    if(value === "None") {
      this.props.changeHandler(null);
    } else {
      // find the country selected
      const country = this.props.countries.find(country => country.name === value);
      this.props.changeHandler(country);
    }
  }

  render() {
    const options = this
          .props
          .countries
          .map(
            (country, i) => <option value={country.name} key={i}>{country.name}</option>
          );
    return (
      <div className="country_selector">
        <form>
          <label htmlFor="country">Select a country:</label>
          <select
            id="country"
            name="country"
            onChange={e => this.changeSelection(e.target.value)}>
            <option value="None">Select one...</option>
            {options}
          </select>
        </form>
      </div>
    );      
  }
}

CountrySelector.defaultProps = {
  countries: []
};

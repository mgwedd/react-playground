// import React, { Component } from 'react';
// import Demonym from './Demonym';
// import CountrySelector from './CountrySelector';
// import './Styles/DemonymApp.css'

// export default class DemonymApp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             countries: [],
//             selected: null
//         };
//     }

//     setSelected(selected) {
//         this.setState({
//           selected
//         });
//       }

//     componentDidMount() {
//         fetch('https://country.register.gov.uk/records.json?page-size=5000')
//           .then(response => response.json())
//           .then(data => {
//             const countriesArr = Object.keys(data).map(countryCode => data[countryCode].item[0]);
//             this.setState({
//                 countries: countriesArr
//             });
//           });
//     }

//     render() {
//         const demon = this.state.selected
//           ? <Demonym 
//                 name={this.state.selected['citizen-names']} 
//                 country={this.state.selected.name}/>
//           : <div 
//                 className="demonym_app__placeholder">
//                 Select a country above
//             </div>;
//     return (
//       <div className="demonym_app">
//         <CountrySelector 
//         countries={ this.state.countries }
//         changeHandler={ selected => this.setSelected(selected) } />
//         { demon }
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import Demonym from './Demonym';
import CountrySelector from './CountrySelector';
import './Styles/DemonymApp.css'

export default class DemonymApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        //check if response is ok
        if(!response.ok) {
          throw new Error('Something went wrong'); //throw an error
        }
        return response; //ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {
    const demon = this.state.selected
          ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
          : <div className="demonym_app__placeholder">Select a country above</div>;
    const error = this.state.error
          ? <div className="demonym_app__error">{this.state.error}</div>
          : "";
    return (
      <div className="demonym_app">
        {error}
        <CountrySelector
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    );
  }
}
import React, { Component } from 'react';

export default class Accordion extends Component {
    
    static defaultProps = { sections: [] };

    state = {
        activeSectionIndex: null
    }

    handleButtonClick = (index) => {
        this.setState({activeSectionIndex: index});
    }

    renderItem(section, index, activeSectionIndex) {
        return (
          <li className='Accordion__item' key={index}>
            <button
              type='button'
              onClick={() => this.handleButtonClick(index)}
            >
              {section.title}
            </button>
            {(activeSectionIndex === index) && <p>{section.content}</p>}
          </li>
        )
      }
    
      render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) =>
                this.renderItem(section, idx, activeSectionIndex)
                )}
            </ul>
        )
      }
}
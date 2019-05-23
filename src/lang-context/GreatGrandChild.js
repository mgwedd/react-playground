import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

class GreatGrandChild extends Component {
    static contextType = LanguageContext;
    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button
                    onClick={() => this.context.setLang('klingon')}
                >
                    Klingon!{' '}
                    {/* yes I know it's a vulcan salut but star-wars */}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        )
    }
}

export default GreatGrandChild
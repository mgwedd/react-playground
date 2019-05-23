import React from 'react';
import './Styles/Demonym.css';

export default function Demonym( props ) {
    return (
        <div className="demonym">
            A { props.name } comes from { props.country }
        </div>
    );
}
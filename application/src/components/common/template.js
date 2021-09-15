import React from 'react';
import { Nav } from '../../components';
import './template.css';

const Template = props => {
    return (
        <div className="bg-layer">
            <div className="fg-layer">
                <label className="logo">Luigi's Pizzeria</label>
                <Nav />
                {props.children}
            </div>
        </div>
    );
}

export default Template;
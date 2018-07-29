import React from 'react';
import './FbAppComp.css'

const HeaderComponent = (props) =>
{
    return (
        <div>
        <header className="header"> {props.Header} </header>
        </div>
    );

}

export default HeaderComponent;
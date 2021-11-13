import React from 'react'
import PropTypes from "prop-types";

const Popup = ({id, url, show}) => {

    return (
        <div className={`popup ${show ? 'open' : ''}`} key={id}>
            <div>
                <h1>Modal heading - id: {id}</h1>
            </div>
            <div><img src={url} alt=""/></div>
        </div>
    );
};

Popup.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    show: PropTypes.bool,
};

export default Popup
import React, {useState} from 'react'
import PropTypes from "prop-types";
import Popup from '../components/popup'

const Image = ({id, url}) => {
    const [show, setShow] = useState(false);
    const handleOpenModal = () => {
        setShow(true)
    };

    return (
        <div className={`col-12 col-md-4`} onClick={handleOpenModal}>
            <img src={url} alt=""/>
            <Popup id={id} url={url} show={show}/>
        </div>
    );
};

Image.propTypes = {
    id: PropTypes.number,
    link: PropTypes.string,
};

export default Image
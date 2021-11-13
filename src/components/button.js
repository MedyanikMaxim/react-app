import React from 'react'

const Button = ({title, link}) => {
    return(
        <a href={link} className={'btn-primary'}>{title}</a>
    )
};

export default Button
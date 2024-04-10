import React from "react";
import './button.styles.scss';
import { Link } from 'react-router-dom';

const Button = (props) => (
        <Link 
            className='button' 
            target="_blank" 
            to={props.to}>{props.buttonLabel}
        </Link>
)

export default Button;
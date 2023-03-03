import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
  switch (props.btnType) {
    case 'success':
      return (<button
        {...props}
        onClick={props.onClick || (() => { })}
        className={`btn btn-success ${props.className || ''} ${props.class || ''}`}
        type="button">
        {props.children}
      </button>);
    case 'success-as-link':
      return (<Link {...props} className={`btn btn-success ${props.className}`}>{props.children}</Link>)
    default:
      return (<button {...props}>{props.children}</button>);
  }
};

export default Button

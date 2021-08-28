import { React, useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function Button({ onClick, children, title }) {
    const { theme } = useContext(ThemeContext);
    return(
        <button className={`bg-${theme}-200`} onClick={onClick}>
          {children ? children : 
          <span className={`${theme}-textColor bg-${theme}-button`}>
              {title}
          </span>}
        </button>
    )
}   
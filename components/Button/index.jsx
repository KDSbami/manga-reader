import { React, useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function Button({ onClick, children, title }) {
    const { theme } = useContext(ThemeContext);
    return(
        <button className={`bg-${theme}-200 py-20px px-65px border-0 rounded-full`} onClick={onClick}>
          {children ? children : 
          <span className={`${theme}-textColor bg-${theme}-button font-opensans font-extrabold`}>
              {title}
          </span>}
        </button>
    )
}
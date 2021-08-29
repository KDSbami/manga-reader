import { React, useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function Button({ onClick, children, title, type, animate }) {
    const { theme } = useContext(ThemeContext);
    let sizing;
    let fontSpacing;
    let animation;
    switch (type){
        case "small":
            sizing = "py-5px px-20px";
            break;
        case "big":
            sizing = "py-20px px-65px"
            break;
        default:
            sizing = "py-20px px-65px";
            break;
    }
    switch (type){
      case "small":
          fontSpacing = "tracking-tight";
          break;
      case "big":
          fontSpacing = ""
          break;
      default:
          fontSpacing = "";
          break;
  }
    switch (animate){
      case true:
          animation = `transition duration-500 ease-in-out bg-foreground hover:bg-background transition duration-500 ease-in-out text-background hover:text-foreground`;
          break;
      case false:
          animation = `bg-foreground text-background`;
          break;
      default:
          animation = `transition duration-500 ease-in-out bg-foreground hover:bg-background transition duration-500 ease-in-out text-background hover:text-foreground`;;
          break;
  }
    return(
        <button className={`flex flex-row justify-center align-center border border-foreground ${sizing} rounded-full ${animation}`} onClick={onClick}>
          {children ? children : 
          <span className={`font-mulish font-extrabold ${fontSpacing} text-xl`}>
              {title}
          </span>}
        </button>
    )
}